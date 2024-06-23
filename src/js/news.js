import './General.js';
import { minutesSince } from './DateFunc.js';
import { ApiController } from './ApiController.js';
import { ArticleModal } from './ArticleModal.js';
import { SummaryModal } from './SummaryModal.js';
import LocalStorage from './LocalStorage.js';
import DisplayController from './DisplayController';
import { StorageList } from './StorageList.js';
import  Url  from './Url';
import NewsFeedApi from './NewsFeedApi.js';

window.NewsFeedApi = NewsFeedApi;
window.Url = Url;
console.log("This is the new console.log windows");

class News {
    constructor() {

        let LocalStorageParams = 
        {
            defaults: {
            "top-article": new Array(),
            "allnews-article-storage": {lastFetch: new Date(), stories: null} // TODO: sets the default storage to when this is called
            }
        };

        this.fetchtime = 15; // Time in minutes before a new refresh should be done.
    

        this.articleModal = new ArticleModal();
        this.summaryModal = new SummaryModal();
        this.displayController = new DisplayController();
        this.localStorage = new LocalStorage(LocalStorageParams);
        this.apiController = new ApiController();

        this.newsFeedApi = new NewsFeedApi(API_TOKEN);

        this.favoriteStorage = new StorageList({prefix: "Favorites-storage-"});
        this.articleStorage = new StorageList({prefix: "Article-storage-"});


        //this.apiTest();
        //this.openStory("");
        //this.openSummary("");

        // Clear all saved information if there is a problem.
        //this.saveController.clearAll();

        this.init();

    }
    async init() {
        // Get what is saved
        let allNews = this.localStorage.getValue("allnews-article-storage");
        let topStories = this.localStorage.getValue("top-article");
        let favorites = this.favoriteStorage.getAllItems();


        // If there are no articles in allNews storage, or it is time to fetch based on the value stored in saveController
        if (allNews.stories == null || 
            allNews.stories.length == 0 || 
            minutesSince(allNews.lastFetch) >= this.fetchtime) {
                
                allNews = await this.newsFeedApi.getAllNews();
                //let url = new Url(SERVER_URL + 'all',{locale: 'us', language: 'en', api_token: API_TOKEN });
                //allNews = await this.apiController.fetchArticle(url.toString());
                this.localStorage.setValue("allnews-article-storage", {lastFetch: new Date(), stories: allNews.data});
                allNews = this.localStorage.getValue("allnews-article-storage");
        }

        // If there are no articles in topStories storage, or it is time to fetch based on the value stored in saveController
        if (topStories.stories == null || 
            topStories.stories.length == 0 || 
            minutesSince(topStories.lastFetch) >= this.fetchtime) {
                
                topStories = await this.newsFeedApi.getTopStories();
                //let url = new Url(SERVER_URL + 'top',{locale: 'us', language: 'en', api_token: API_TOKEN});
                //topStories = await this.apiController.fetchArticle(url.toString());
                this.localStorage.setValue("top-article", {lastFetch: new Date(), stories: topStories.data});
                topStories = this.localStorage.getValue("top-article");
        }

        // Send what we have off to the display controller
        this.displayController.displayFavorites(favorites);
        this.displayController.displayTopStories(topStories.stories);
        this.displayController.displayContent(allNews.stories);

        // Add event handlers to things
        this.addEventHandlers();
    }
    async openStory(url, uuid) {
        

        // Check and see if we have the story, if not, do a fetch
        let story = this.articleStorage.getItem(uuid);
        if (story == null) {
            story = await this.apiController.fetchArticle(url);
            this.articleStorage.addItem(uuid, story);
        }

        this.articleModal.showModal(story.data);

        
    }
    async openSummary(summary) {
                // Check if it is a favorite
        let isFavorited = this.favoriteStorage.getItem(summary.uuid) != null;
        this.summaryModal.showModal(summary, isFavorited);

        let url = new Url(ARTICLE_URL, {url: summary.url, api_token: ARTICLE_TOKEN});
        this.addSummaryEventHandlers(url.toString(), summary.uuid, isFavorited);
    }
    addSummaryEventHandlers(url, uuid, isFavorite) {
        document.querySelector('#readFullArticleButton').onclick = this.openStory.bind(this, url, uuid);

        let news = this.localStorage.getValue("allnews-article-storage")
                                    .stories.concat(this.localStorage.getValue("top-article").stories);
        let story = news.find(s => s.uuid == uuid);
        // Is it already a favorite?

        // TODO: Favorites is still broken currently.
        if (isFavorite) {
            document.querySelector('#favoritebtn').addEventListener("click", this.favoriteStorage.addItem.bind(this, uuid));
            document.querySelector('#favoritebtn').addEventListener("click", this.updateFavorites.bind(this));
        }
        else {
            document.querySelector('#favoritebtn').addEventListener("click", this.favoriteStorage.removeItem.bind(this, story));
            document.querySelector('#favoritebtn').addEventListener("click", this.updateFavorites.bind(this));
        }
        
    }
    updateFavorites() {
        let favorites = this.favoriteStorage.getAllItems();
        this.displayController.displayFavorites(favorites);
        this.summaryModal.closeModal();
        this.addEventHandlers();
    }
    
    addEventHandlers() {
        // This will open up the modal window that does not contain the article. A view article button could be on it to openStory(). I think adding and removing from favorites would go well here.
        let articles = document.getElementsByName("article");
        let news = this.localStorage.getValue("allnews-article-storage")
                                    .stories.concat(this.localStorage.getValue("top-article").stories, 
                                                    this.favoriteStorage.getAllItems());

        for (let i = 0; i < articles.length; i++) {
            let uuid = articles[i].dataset.uuid;
            let story = news.find(s => s.uuid == uuid);
            if (story != undefined || story != null) {
                articles[i].onclick = this.openSummary.bind(this, story);
            }
        }
    }
}
let news;
window.onload = () => {
    news = new News();
}