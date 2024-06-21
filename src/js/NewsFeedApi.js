import Url from "./Url";
import LocalStorage from "./LocalStorage";
import { minutesSince } from './DateFunc.js';


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
        this.apiToken = apiToken;
        let localStorageParams = 
        {
            defaults: {
                TOP_STORIES_ENDPOINT: new Array(),
                ALL_NEWS_ENDPOINT: {lastFetch: new Date(), stories: null}
            }
        };
        this.localStorage = new LocalStorage(localStorageParams);
    }


    // Set the locale, I.E. What region is the news about? Ex. "us" for United States news.
    setLocale(locale) {
        if(Array.isArray(locale)) {
            this.locale = locale;
        } else {
            this.locale.push(locale);
        }
    }


    // Set the language returned from article fetches. Ex. "en" for English, "es" for Spanish
    setLanguage(language) {
        this.language = language;
    }


    // Using the Url class, construct an API call URL using our locale, language, and api token.
    getUrl(endpoint) {
        let url = new Url(NewsFeedApi.BASE_URL + "/" + NewsFeedApi.API_VERSION + "/" + endpoint);
        url.addParam("locale", this.locale);
        url.addParam("language", this.language);
        url.addParam("api_token", this.apiToken);

        return url.toString();
    }


    // All news feed.
    async getAllNews() {
        let url = this.getUrl(NewsFeedApi.ALL_NEWS_ENDPOINT);
        return NewsFeedApi.getFeed(url, NewsFeedApi.ALL_NEWS_ENDPOINT);
    }


    // Most-popular news feed.
    async getTopStories() {
        let url = this.getUrl(NewsFeedApi.TOP_STORIES_ENDPOINT);
        return NewsFeedApi.getFeed(url, NewsFeedApi.TOP_STORIES_ENDPOINT);
    }


    // Time-sensitive news feed.
    async getHeadlines() {
        let url = this.getUrl(NewsFeedApi.HEADLINES_ENDPOINT);
        return NewsFeedApi.getFeed(url, NewsFeedApi.HEADLINES_ENDPOINT);
    }


    // Returns either cached information or fetched the information based on how much time has elapsed.
    static async getFeed(url, endpoint) {
        let fetchedFeed;
        let cachedFeed = this.localStorage.getValue(endpoint);

        if (cachedFeed !== undefined || 
            cachedFeed.stories.length >= 0 || 
            minutesSince(cachedFeed.lastFetch) < NewsFeedApi.TIME_TO_FETCH) {  // If we already have a recent news feed that is valid.
                fetchedFeed = cachedFeed;
        }
        else {                                                      // Otherwise, pull from elsewhere
            fetchedFeed =  await fetch(url)
                .then(resp => {
                    if(resp.ok) {
                        return resp.json();
                    }
                    else if (resp.status == 402) {
                        throw new Error("Daily usage limit is reached.");
                    }
                })
                .catch(err => {
                    return {error: true, message: err};
                })
            
            // Store results in local storage
            this.localStorage.setValue(endpoint, fetchedFeed);
        }
        return fetchedFeed;
    }
}

/*
// pretend we're inside our main entry point.
const feedApi = new NewsFeedApi(API_NEWS_FEED_TOKEN);
let theFeed = feedApi.fetchAll();


class NewsArticleApi {


https://www.articlextractor.com/documentation

}

const newsApi = new NewsArticleApi(API_ARTICLE_EXTRACTION_TOKEN);
let thisArticle = newsApi.fetchArticle("https://www.articlextractor.com/documentation");


*/