import './General.js';

import { ArticleModal } from './ArticleModal.js';
import { SummaryModal } from './SummaryModal.js';
import { DisplayController } from './displayController.js';

import NewsFeedApi from './NewsFeedApi';
import NewsArticleApi from './NewsArticleApi'

window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;

class News {
    constructor() {
        this.newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        this.newsArticleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
    
        // TODO: These will be replaced eventually in the refactor
        this.articleModal = new ArticleModal();
        this.summaryModal = new SummaryModal();
        this.displayController = new DisplayController();

        // Get the news stories
        /// Get all news
        let allNews = this.newsFeedApi.getAllNews();

        /// Get top stories
        let topStories = this.newsFeedApi.getTopStories();

        /// Get favorites
        // TODO: Favorites class to handle favorites


        // Display the news stories
        // TODO: Replace display controller with the new components
        //this.displayController.displayFavorites(favorites);
        this.displayController.displayTopStories(topStories.stories);
        this.displayController.displayContent(allNews.stories);

        // Add event handlers to things
        //this.addEventHandlers();

    }

    /*
    async openStory(url, uuid) {
        

        // Check and see if we have the story, if not, do a fetch
        let story = this.articleStorage.getItem(uuid);
        this.debug.debug("This is what story is getting set to from find article", story);
        if (story == null) {
            story = await this.apiController.fetchArticle(url);
            this.debug.debug("openStory call inside promise", story);
            this.articleStorage.addItem(uuid, story);
        }

        this.debug.debug("This is what we are sending to the article modal", story);
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
        let news = this.allNews.stories.concat(this.topStories.stories) // TODO: Add back favorites here when we impliment the favorites changes

        for (let i = 0; i < articles.length; i++) {
            let uuid = articles[i].dataset.uuid;
            let story = news.find(s => s.uuid == uuid);
            if (story != undefined || story != null) {
                articles[i].onclick = this.openSummary.bind(this, story);
            }
        }
    }
        */
}
let news;
window.onload = () => {
    news = new News();
}