import { Debug } from './debug';

// API documentation
// https://www.thenewsapi.com/documentation

export class ApiController {
    constructor() {
        this.debugging = false;
        this.prefix = "apiController.js"
        this.debug = new Debug(this.prefix, this.debugging);
        
        // This is a switch to turn off API calls, because I am testing this with the free version. Limits to 100 article summary calls and 25 full article calls.
        this.turnOnApiCalls = true;

    }
    async getHeadlines(url) {

        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}headlines?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            this.debug.debug("getHeadlines URL", url);
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
    async topStories(search = "", searchFields = "", categories = "", publishedOn = "", publishedBefore = "", publishedAfter = "", locale = "us", language = "en") {


        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}top?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += search == "" ? "" : `&search=${encodeURIComponent(search)}`;
            url += searchFields == "" ? "" : `&search_fields=${searchFields}`;
            url += categories == "" ? "" : `&categories=${categories}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            url += publishedBefore == "" ? "" : `&published_before=${publishedBefore}`;
            url += publishedAfter == "" ? "" : `&published_after=${publishedAfter}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the topStories call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("topStories", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async allNews(search = "", searchFields = "", categories = "", publishedOn = "", publishedBefore = "", publishedAfter = "", locale = "us", language = "en") {


        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}all?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += search == "" ? "" : `&search=${encodeURIComponent(search)}`;
            url += searchFields == "" ? "" : `&search_fields=${searchFields}`;
            url += categories == "" ? "" : `&categories=${categories}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            url += publishedBefore == "" ? "" : `&published_before=${publishedBefore}`;
            url += publishedAfter == "" ? "" : `&published_after=${publishedAfter}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the allNews call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("allNews", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async similarNews(uuid, categories = "", publishedOn = "", publishedBefore = "", publishedAfter = "", locale = "us", language = "en") {


        if (this.turnOnApiCalls) {
            let url = `${SERVER_URL}similar/${uuid}?locale=${locale}&language=${language}&api_token=${API_TOKEN}`;
            url += categories == "" ? "" : `&categories=${categories}`;
            url += publishedOn == "" ? "" : `&published_on=${publishedOn}`;
            url += publishedBefore == "" ? "" : `&published_before=${publishedBefore}`;
            url += publishedAfter == "" ? "" : `&published_after=${publishedAfter}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the similarNews call", response);
                        return response.json()
                    }
                })
                .catch(err => {
                    this.debug.error("similarNews", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async newsByUUID(uuid) {

        if (this.turnOnApiCalls) {
            const url = `${SERVER_URL}uuid/${uuid}?api_token=${API_TOKEN}`;
            const article = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the newsByUUID call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("newsByUUID", err);
                })
            return article;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }
    async fetchArticle(article) {

        if (this.turnOnApiCalls) {
            const url = `${ARTICLE_URL}?url=${article}&api_token=${ARTICLE_TOKEN}`;
            const returnArticle = await fetch(url)
                .then(response => {
                    if (!response.ok) {
                        if (response.status == 402) {
                            alert("Daily usage limit is reached.");
                        }
                    }
                    else {
                        this.debug.debug("Response from the fetchArticle call", response);
                        return response.json();
                    }
                })
                .catch(err => {
                    this.debug.error("fetchArticle", err);
                })
            return returnArticle;
        }
        else
            this.debug.error("API calls are set to off", this.turnOnApiCalls);
    }


}



