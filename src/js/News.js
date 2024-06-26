import './General.js';
import NewsClient from '@ocdla/http2';
import DisplayController from './DisplayController.js';
import NewsFeedApi from './NewsFeedApi.js';
import NewsArticleApi from './NewsArticleApi.js'
import StorageList from './StorageList.js';
import Favorites from './Favorites.js';

import ArticleModal from './components/ArticleModal.js';
import SummaryModal from './components/SummaryModal.js';

window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;

// Define new class newsClient
// request class is built in
// import news client into this code
// instantiate newsClient, send method

// submit a request to a server, get a response back with the data
// the thing that sends a request is called a client
// formet is 


class News {
    constructor() {
        this.newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        this.newsArticleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
        this.favoriteStorage = new Favorites({prefix: "Favorite-storage-"});
        this.articleStorage = new StorageList({prefix: "News-Metadata-storage-"});
        
        
        this.displayController = new DisplayController();
        this.articleModal = new ArticleModal();
        this.summaryModal = new SummaryModal();

        // Get the news stories
        //this.initializeTopStories();
        //this.initializeAllNews();
        //this.initializeFavorites();
        
        let newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);

        // Request an individual article.
        //"news/all";
        //"news/top";
        //"news/headlines";
        let endpoint = "news/all";
        let url = newsFeedApi.getUrl(endpoint);
        // url.addParam("zipCode",zipCode);


        let req = new Request(url.toString());

        // Instantiate an HTTP client that we create.
        // Internally, the client uses fetch().
        // It can also access the LocalStorageCache and
        // store Responses in the cache for later use,
        // and return Responses already stored in the cache
        // that match() the Request.
        let client = new NewsClient();
        // client = new WeatherClient();

        // Client can retrieve anything from the LocalStorageCache
        // and return it as an HTTP Response.
        let resp = client.send(req);


        // Do something with the response;
        // probably update the view.
        resp.then((resp) => resp.json()).then((feed) => {
            this.displayController.populateAllNewsContentArea(feed.data);
            //this.addEventHandlers(feed);
        });

    
    }

    /*
    TODO LIST
    Use request response life cycle anywhere we get data
    One class to build URLs, always use the same news client class to send the request objects
    Combine efforts in datefunc
    - Third package for lib-date2

    Adding lib-local-storagecache
    lib-http2

    Move localstoragecache to lib and also Url

    Think through instructions on github.
    http client if caching is turned on, the client asks if there is something in the local storage cache

    time to live is attached to cache control header
    */

    async initializeTopStories() {
        // Get top stories and display them
        let topStories = await this.newsFeedApi.getTopStories();
        this.displayController.populateTopStoriesCarosel(topStories.stories);
        this.addEventHandlers(topStories.stories);
    }
    async initializeAllNews() {
        // Get the main news content and display them
        let allNews = await this.newsFeedApi.getAllNews();
        this.displayController.populateAllNewsContentArea(allNews.stories);
        this.addEventHandlers(allNews.stories); // TODO: Event handling should be rewritten as event delegation. We will keep this for now and refactor later.
    }
    async initializeFavorites() {
        // Get the favorites and display them
        let favorites = this.favoriteStorage.getAllItems();
        console.log(favorites);
        this.displayController.populateFavoritesSidebar(favorites);
        this.addEventHandlers(favorites);
    }

    // TODO: The remaining methods are old methods that were moved here from the original news.js file. They need to be refactored. They control event handlers.
    
    
    addEventHandlers(newsItems = []) {
        const articles = document.getElementsByName("article");

        Array.from(articles).forEach((article, index) => {
            const uuid = article.dataset.uuid;
            const summary = newsItems.find(item => item.uuid === uuid);
            if (summary) {
                let isFavorited = this.favoriteStorage.getItem(summary.uuid) != null;
                article.onclick = () => this.openSummary(summary, isFavorited);
            }
        });

    }


    // TODO: These are old methods that were moved here from the original news.js file. They need to be refactored.
    async openStory(url, uuid) {
        // Check and see if we have the story, if not, do a fetch
        let story = this.articleStorage.getItem(uuid);
        if (story == null) {
            story = await this.newsArticleApi.getArticle(encodeURIComponent(url));
            this.articleStorage.addItem(uuid, story);
        }

        this.articleModal.showModal(story.data);

        
    }
    async openSummary(summary, isFavorited) {
        this.summaryModal.showModal(summary, isFavorited);
        let favoriteBtn = document.querySelector("#favoritebtn");
        favoriteBtn.onclick = () => this.favoriteStorage.updateFavorites(summary, isFavorited);

        let readFullArticleButton = document.querySelector("#readFullArticleButton");
        readFullArticleButton.onclick = () => this.openStory(summary.url, summary.uuid);

    }   

}
let news;
window.onload = () => {
    news = new News();
}