import './General.js';
import NewsClient from '../../dev_modules/@ocdla/http2/HttpClient.js';
import DisplayController from './DisplayController';
import NewsFeedApi from './NewsFeedApi';
import NewsArticleApi from './NewsArticleApi'
import StorageList from './StorageList';
import Favorites from './Favorites';

import ArticleModal from './components/ArticleModal';
import SummaryModal from './components/SummaryModal';

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
        
        this.favoriteStorage = new Favorites({prefix: "Favorite-storage-"});
        this.articleStorage = new StorageList({prefix: "News-Metadata-storage-"});
        
        
        this.displayController = new DisplayController();
        this.articleModal = new ArticleModal();
        this.summaryModal = new SummaryModal();        
        let newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);


        let allNewsUrl = newsFeedApi.getUrl("news/all");
        //let topNewsUrl = newsFeedApi.getUrl("news/top");
        //let headlinesNewsUrl = newsFeedApi.getUrl("news/headlines");


        // We convert our urls to Request objects
        let reqs = [new Request(allNewsUrl.toString())];//, new Request(topNewsUrl.toString())];//, new Request(headlinesNewsUrl.toString())];

        // The client accesses our local storage and does fetchs on the Request objects we just made.
        let client = new NewsClient();
        let resps = reqs.map((req) => client.send(req));

        console.log(resps);


        // TODO: We are getting fullfilled promises here now because we need to await the body up stream to save it properly.
        Promise.all(resps)
        .then((responses) => Promise.all(responses.map((resp) => resp.json())))
        .then((feeds) => {
            console.log(feeds);
            let parsedFeeds = feeds.map((feed) => JSON.parse(feed));
            this.displayController.populateAllNewsContentArea(parsedFeeds.data);
            this.addEventHandlers(parsedFeeds.data);
            //this.displayController.populateTopStoriesCarosel(feeds[1].data);
            //this.addEventHandlers(feeds[1].data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }

    /*
    TODO LIST
    +Use request response life cycle anywhere we get data
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