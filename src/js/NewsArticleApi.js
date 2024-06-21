// Pulls the full article from the article extractor API

import Url from "./Url";
import StorageList from "./LocalStorage";
import { minutesSince } from './DateFunc.js';


export default class NewsFeedApi {

    #apiToken;

    #language = "en";

    #locale = "us";


    static BASE_URL = "https://api.articlextractor.com";

    static API_VERSION = "v1";

    static ENDPOINT = "extract";
   

    constructor(apiToken) {
        this.apiToken = apiToken;
        this.articleStorage = new StorageList({prefix: "Article-storage-"});
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
    getUrl(articleUrl) {
        let apiRequestUrl = new Url(NewsFeedApi.BASE_URL + "/" + NewsFeedApi.API_VERSION + "/" + NewsFeedApi.ENDPOINT);
        apiRequestUrl.addParap("url", articleUrl)
        apiRequestUrl.addParam("locale", this.locale);
        apiRequestUrl.addParam("language", this.language);
        apiRequestUrl.addParam("api_token", this.apiToken);

        // TODO: The API call needs a url param

        return apiRequestUrl.toString();
    }

    // Get an article's details from its url
    async getArticle(articleUrl) {
        let apiRequestUrl = this.getUrl(articleUrl);
        return NewsFeedApi.getFeed(apiRequestUrl);
    }

    // Returns either cached information or fetched the information based on how much time has elapsed.
    static async getFeed(apiRequestUrl, endpoint) {
        let fetchedFeed;
        let cachedFeed = this.localStorage.getValue(endpoint);

        if (cachedFeed !== undefined || 
            cachedFeed.stories.length >= 0 || 
            minutesSince(cachedFeed.lastFetch) < NewsFeedApi.TIME_TO_FETCH) {  // If we already have a recent news feed that is valid.
                fetchedFeed = cachedFeed;
        }
        else {                                                                  // Otherwise, pull from elsewhere
            fetchedFeed =  await fetch(apiRequestUrl)
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
