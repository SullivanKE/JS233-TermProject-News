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

    }
    // These check storage, and if nothing is present, prepare to call API
    fetchFavorites() {
        let favorites;
        try {
            favorites = JSON.parse(localStorage["favorite-article-storage"]); // localStorage.getItem("tasks")
        }
        catch {
            favorites = new Array();
        }
        return favorites;
    }
    fetchTopStories() {
        let topStories;
        try {
            topStories = JSON.parse(localStorage["top-article-storage"]); // localStorage.getItem("tasks")
        }
        catch {
            topStories = {
                lastFetch: Date.now,
                stories: null
            }
        }
        return topStories;

    }
    fetchAllNews() {
        let allNews;
        try {
            allNews = JSON.parse(localStorage["allnews-article-storage"]); // localStorage.getItem("tasks")
        }
        catch {
            allNews = {
                lastFetch: Date.now,
                stories: null
            }
        }
        return allNews;

    }
    fetchArticles() {
        let articles;
        try {
            articles = JSON.parse(localStorage["story-article-storage"]); // localStorage.getItem("tasks")
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
    }
    refreshTopStories(topStories) {
        this.topStories.lastFetch = Date.now;
        this.topStories.stories = topStories;
    }
    refreshAllNews(allNews) {
        this.allNews.lastFetch = Date.now;
        this.allNews.stories = allNews;
    }

    // Add and remove from favorites
    addFavorite(favorite) {
        this.favorites.push(favorite);
    }
    removeFavorite(uuid) {
        let index = this.favorites.findIndex(f => f.uuid == uuid);
        if (index >= 0)
            this.favorites.splice(index, 1);
        else
            this.debug.error("Article not found in favorites", uuid);
    }

    // Finds and returns a saved article. Returns null if not, indicating a fetch is required
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
    }
    clearAll() {
        this.favorites = new Array();
        this.allNews = {
            lastFetch: Date.now,
            stories: new Array()
        };
        this.topStories = {
            lastFetch: Date.now,
            stories: new Array()
        };
        this.articles = new Array();
    }
}