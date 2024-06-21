import { Url } from "./Url";


export default class NewsFeedApi {

    #apiToken;

    static BASE_URL = "https://api.thenewsapi.com";

    static API_VERSION = "v1";

    static ALL_NEWS_ENDPOINT = "news/all";

    static TOP_STORIES_ENDPOINT = "news/top";

    static HEADLINES_ENDPOINT = "news/headlines";

    #locale = "us";

    #language = "en";

    constructor(apiToken) {
        this.apiToken = apiToken;
    }


    setLocale(locale) {
        if(Array.isArray(locale)) {
            this.locale = locale;
        } else {
            this.locale.push(locale);
        }
    }

    setLanguage(language) {
        this.language = language;
    }



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
        return NewsFeedApi.getFeed(url);
    }

    // Most-popular news feed.
    async getTopStories() {
        let url = this.getUrl(NewsFeedApi.TOP_STORIES_ENDPOINT);

        return NewsFeedApi.getFeed(url);
    }

    // Time-sensitive news feed.
    async getHeadlines() {

        let url = this.getUrl(NewsFeedApi.HEADLINES_ENDPOINT);

        return NewsFeedApi.getFeed(url);
    }





    static async getFeed(url) {

        // TODO:
        // Check if the resource is already stored in local storage
        // If it is within time constraints, return that
        // otherwise, fetch
        return await fetch(url)
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