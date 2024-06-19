import './general';

export class LocalStorage {
    static DEFAULTS = {};       // JSON Object that holds default string key names and default values if no values exist
    static FETCHTIME = 0;

    constructor(config) {

        // Define the default string keys to access the local storage. Expects JSON object with string keys and default value types.
        // EX. {"news": {lastFetch: new Date(), stories: null},  "favorites": new Array()}
        if (config.defaults != undefined)
            LocalStorage.DEFAULTS = config.defaults;

        // Optional integer time in minutes to do another fetch. If not specified, we set it to 0.
        if (config.fetchtime != undefined)
            LocalStorage.FETCHTIME = config.fetchtime;

    }

    // Using the string key, return from local storage the value stored. If it is undefined, search on the defaults object for a base structure
    getValue(key) { return localStorage[key] == undefined ? SaveController.DEFAULTS[key] : JSON.parse(localGet); }

    // Using the string key, set local storage to the passed value
    setValue(key, value) { localStorage[key] = JSON.stringify(value); }
   
    // Clear all local storage
    clearAll() { localStorage.clear(); }

    // TODO: Find a new home for these methods
    findArticle(uuid) {
        let index = this.articles.findIndex(a => a.uuid == uuid);
        return index == -1 ? null : this.articles[index];
    }
    addArticle(uuid, article) {
        let newArticle = {
            uuid: uuid,
            article: article
        }
        this.articles.push(newArticle);
        localStorage["story-article-storage"] = JSON.stringify(this.articles);
    }
    
}