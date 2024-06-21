import { Debug } from './debug';

// API documentation
// https://www.thenewsapi.com/documentation



export class ApiController {
    #apiToken;

    
    static BASE_URL = ""; // Add later
    static API_VERSION = "v1";
    static ENDPOINT = "/news/all";

    #local = ["us"];
    #language = ["en"];

    constructor(apiToken) {
        this.apitoken = apiToken;


        this.debugging = false;
        this.prefix = "apiController.js"
        this.debug = new Debug(this.prefix, this.debugging);
        
        // This is a switch to turn off API calls, because I am testing this with the free version. Limits to 100 article summary calls and 25 full article calls.
        this.turnOnApiCalls = true;

    }
    setLocal(local) {
        if(Array.isArray(local)) {
            this.locale = locale;
        }
        else {
            this.local.push(locale);
        }
    }
    setLanguage(language) {
        if(Array.isArray(language)) {
            this.language = language;
        }
        else {
            this.language.push(language);
        }
    }
    async getFeed() {
        let url = new Url(); // fill this in


    }

    async fetchArticle(url) {

        if (this.turnOnApiCalls) {
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Reponse from the getHeadlines call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("getHeadlines", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);

    }

}



