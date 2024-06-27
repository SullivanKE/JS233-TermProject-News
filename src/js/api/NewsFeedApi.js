import Url from "@ocdla/url";
import LocalStorage from '@ocdla/local-storage-cache';


export default class NewsFeedApi {

    #apiToken;

    #language = "en";

    #locale = "us";

    static BASE_URL = "https://api.thenewsapi.com";

    static API_VERSION = "v1";

    static ALL_NEWS_ENDPOINT = "news/all";

    static TOP_STORIES_ENDPOINT = "news/top";

    static HEADLINES_ENDPOINT = "news/headlines";

    static TIME_TO_FETCH = 15;

    

    constructor(apiToken) {
        this.#apiToken = apiToken;
        const localStorageParams = {
            defaults: {
                [NewsFeedApi.TOP_STORIES_ENDPOINT]: {lastFetch: new Date(), stories: new Array()},
                [NewsFeedApi.HEADLINES_ENDPOINT]: {lastFetch: new Date(), stories: new Array()},
                [NewsFeedApi.ALL_NEWS_ENDPOINT]: {lastFetch: new Date(), stories: new Array()}
            }
        };
        this.localStorage = new LocalStorage(localStorageParams);
    }


    // Set the locale, I.E. What region is the news about? Ex. "us" for United States news.
    setLocale(newLocale) {
        if (Array.isArray(newLocale)) {
            this.#locale = newLocale;
        } else {
            this.#locale.push(newLocale);
        }
    }


    // Set the language returned from article fetches. Ex. "en" for English, "es" for Spanish
    setLanguage(language) {
        this.language = language;
    }


    // Using the Url class, construct an API call URL using our locale, language, and api token.
    getUrl(endpoint) {
        let url = new Url(NewsFeedApi.BASE_URL + "/" + NewsFeedApi.API_VERSION + "/" + endpoint);
        url.addParam("locale", this.#locale);
        url.addParam("language", this.#language);
        url.addParam("api_token", this.#apiToken);

        return url.toString();
    }


    // All news feed.
    async getAllNews() {
        let url = this.getUrl(NewsFeedApi.ALL_NEWS_ENDPOINT);
        return this.getFeed(url, NewsFeedApi.ALL_NEWS_ENDPOINT);
    }


    // Most-popular news feed.
    async getTopStories() {
        let url = this.getUrl(NewsFeedApi.TOP_STORIES_ENDPOINT);
        return this.getFeed(url, NewsFeedApi.TOP_STORIES_ENDPOINT);
    }


    // Time-sensitive news feed.
    async getHeadlines() {
        let url = this.getUrl(NewsFeedApi.HEADLINES_ENDPOINT);
        return this.getFeed(url, NewsFeedApi.HEADLINES_ENDPOINT);
    }


    async getFeed(url, endpoint) {

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const feed = await response.json();
        } catch (error) {
            return { error: true, message: error.message };
        }
    }
}