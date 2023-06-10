import './general';
import { Debug } from './debug';

export class SaveController {
    constructor() {
        this.debugging = true;
        this.prefix = "saveController.js";
        this.debug = new Debug(this.prefix, this.debugging)

        this.favorites = this.fetchFavorites();
        this.topStories = this.fetchTopStories();
        this.allNews = this.fetchAllNews();
        this.articles = this.fetchArticles();

        // Time in minutes to do another fetch
        // 100 fetches for free, 24 hours in a day, 24 * 4 is just under this.
        this.fetchTime = 15;

        // Bind elements
        this.addFavorite = this.addFavorite.bind(this);
        this.removeFavorite = this.removeFavorite.bind(this);
        this.findFavorite = this.findFavorite.bind(this);

    }
    // These check storage, and if nothing is present, prepare to call API
    fetchFavorites() {
        let favorites;
        try {
            favorites = JSON.parse(localStorage["favorite-article-storage"]); 
        }
        catch {
            favorites = new Array();
        }
        return favorites;
    }
    fetchTopStories() {
        let topStories;
        try {
            topStories = JSON.parse(localStorage["top-article-storage"]); 
        }
        catch {
            topStories = {
                lastFetch: new Date(),
                stories: null
            }
        }
        return topStories;

    }
    fetchAllNews() {
        let allNews;
        try {
            allNews = JSON.parse(localStorage["allnews-article-storage"]); 
        }
        catch {
            allNews = {
                lastFetch: new Date(),
                stories: null
            }
        }
        return allNews;

    }
    fetchArticles() {
        let articles;
        try {
            articles = JSON.parse(localStorage["story-article-storage"]); 
        }
        catch {
            articles = new Array();
        }
        return articles;
    }

    // Return the current stored stories
    getFavorites() {
        return this.favorites;
    }
    getTopStories() {
        return this.topStories;
    }
    getAllNews() {
        return this.allNews;
    }
    getFetchTime() {
        return this.fetchTime;
    }

    // Replace storage with new items
    setFavorites(favorites) {
        this.favorites = favorites;
        localStorage["favorite-article-storage"] = JSON.stringify(this.favorites);
    }
    refreshTopStories(topStories) {
        this.topStories.lastFetch = new Date();
        this.topStories.stories.data.concat(topStories.data);
        localStorage["top-article-storage"] = JSON.stringify(this.topStories);
    }
    refreshAllNews(allNews) {
        this.allNews.lastFetch = new Date();
        this.allNews.stories.data.concat(allNews.data);
        localStorage["allnews-article-storage"] = JSON.stringify(this.allNews);
    }

    // Add, remove, and find from favorites
    addFavorite(favorite) {
        this.debug.debug("Pushing favorites error, what is favorites?", this.favorites);
        this.debug.debug("What are we sending in to favorites?", favorite);
        let index = this.favorites.findIndex(f => f.uuid == favorite.uuid);
        if (index == -1) {
            this.favorites.push(favorite);
            localStorage["favorite-article-storage"] = JSON.stringify(this.favorites);
        }
        else {
            // The favorite already exists
            this.debug.error("Favorite already exists");
        }
    }
    removeFavorite(uuid) {
        this.debug.debug("Removing favorites error, what is favorites?", this.favorites);
        this.debug.debug("What are we sending in to favorites?", uuid);
        let index = this.favorites.findIndex(f => f.uuid == uuid);
        if (index >= 0) {
            this.favorites.splice(index, 1);
            localStorage["favorite-article-storage"] = JSON.stringify(this.favorites);
        }
        else
            this.debug.error("Article not found in favorites", uuid);
    }
    findFavorite(uuid) {
        let index = this.favorites.findIndex(a => a.uuid == uuid);
        this.debug.debug("Index of find Favorite", index);
        return index == -1 ? null : this.favorites[index];
    }
    // Finds and returns a saved article. Returns null if not, indicating a fetch is required
    findArticle(uuid) {
        let index = this.articles.findIndex(a => a.uuid == uuid);
        this.debug.debug("Index of find Article", index);
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
    clearAll() {
        this.favorites = new Array();
        this.allNews = {
            lastFetch: new Date(),
            stories: new Array()
        };
        this.topStories = {
            lastFetch: new Date(),
            stories: new Array()
        };
        this.articles = new Array();

        localStorage.clear();
    }
}