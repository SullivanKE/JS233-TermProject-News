import './General.js';
import DisplayController from './DisplayController';
import NewsFeedApi from './NewsFeedApi';
import NewsArticleApi from './NewsArticleApi'
import StorageList from './StorageList';
import Favorites from './Favorites';

import ArticleModal from './components/ArticleModal';
import SummaryModal from './components/SummaryModal';

window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;

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
        this.initializeTopStories();
        this.initializeAllNews();
        this.initializeFavorites();

    }

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