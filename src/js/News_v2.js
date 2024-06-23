import './General.js';
import DisplayController from './DisplayController';
import NewsFeedApi from './NewsFeedApi';
import NewsArticleApi from './NewsArticleApi'
import StorageList from './StorageList.js';

window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;

class News {
    constructor() {
        this.newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        this.newsArticleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
        this.favoriteStorage = new StorageList({prefix: "Favorite-storage-"});
        this.articleStorage = new StorageList({prefix: "Article-storage-"});
        
        
        this.displayController = new DisplayController();

        // Get the news stories
        this.initializeTopStories();
        this.initializeAllNews();
        this.initializeFavorites();

        this.addEventHandlers();
    }

    async initializeTopStories() {
        // Get top stories and display them
        let topStories = await this.newsFeedApi.getTopStories();
        this.displayController.populateTopStoriesCarosel(topStories.stories);
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
        this.displayController.populateFavoritesSidebar(favorites);
    }

    // TODO: The remaining methods are old methods that were moved here from the original news.js file. They need to be refactored. They control event handlers.
    
    updateFavorites() {
        let favorites = this.favoriteStorage.getAllItems();
        this.displayController.displayFavorites(favorites);
        this.summaryModal.closeModal();
        this.addEventHandlers();
    }
    
    addEventHandlers(newsItems = []) {
        const articles = document.getElementsByName("article");

        Array.from(articles).forEach((article, index) => {
            const uuid = article.dataset.uuid;
            const summary = newsItems.find(item => item.uuid === uuid);
            if (summary) {
                let isFavorited = this.favoriteStorage.getItem(summary.uuid) != null;
                article.onclick = () => this.displayController.openSummary(summary, isFavorited);
            }
        });
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

}
let news;
window.onload = () => {
    news = new News();
}