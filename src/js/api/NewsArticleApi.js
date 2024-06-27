// Pulls the full article from the article extractor API

import Url from "../../../dev_modules/@ocdla/url/Url";
import StorageList from "./../StorageList";

export default class NewsFeedApi {

    #apiToken;

    #language = "en";

    #locale = "us";


    static BASE_URL = "https://api.articlextractor.com";

    static API_VERSION = "v1";

    static ENDPOINT = "extract";
   

    constructor(apiToken) {
        this.#apiToken = apiToken;
        this.articleStorage = new StorageList({prefix: "Article-extractor-storage-"});
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
    // articleUrl is the url of the article we are extracting.
    getUrl(articleUrl) {
        let apiRequestUrl = new Url(NewsFeedApi.BASE_URL + "/" + NewsFeedApi.API_VERSION + "/" + NewsFeedApi.ENDPOINT);
        apiRequestUrl.addParam("url", articleUrl)
        apiRequestUrl.addParam("locale", this.locale);
        apiRequestUrl.addParam("language", this.language);
        apiRequestUrl.addParam("api_token", this.#apiToken);

        return apiRequestUrl.toString();
    }


    // Get an article's details from its url
    async getArticle(articleUrl) {
        let apiRequestUrl = this.getUrl(articleUrl);
        return this.getFeed(apiRequestUrl, articleUrl);
    }

    
    // Returns either cached information or fetched the information if it does not exist.
    // articleUrlIdentifier is the url component that the API uses. It is used as a string key in our local storage
    async getFeed(apiRequestUrl, articleUrlIdentifier) {
        let fetchedFeed;
        console.log(articleUrlIdentifier);
        let cachedFeed = this.articleStorage.getItem(articleUrlIdentifier);

        if (cachedFeed === null) { // We don't have anything in cache, so retrieve it from the API
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
            this.articleStorage.addItem(encodeURIComponent(fetchedFeed.url), fetchedFeed);
        }
        else { // The article is cached, so we're going to use it instead                                     
            fetchedFeed = cachedFeed;
        }
        return fetchedFeed;
    }


}
