import './General';
import NewsItemComponent from './components/NewsItemComponent';
import CaroselComponent from './components/CaroselComponent';
import FavoritesComponent from './components/FavoritesComponent';

import ArticleModal from './components/ArticleModal';
import SummaryModal from './components/SummaryModal';

export default class DisplayController {
    constructor() {

        // Items dealing with the top of the page
        this.$carousel = document.querySelector('#headlinesCarousel');
        this.$carouselIndicators = document.querySelector('#headlineIndicators');
        this.$carouselInner = document.querySelector('#headlineInner');
        this.$noTopContent = document.querySelector('#nocontenttop');
        this.$loadingTop = document.querySelector('#loadingtop');

        // Items dealing with the side bar
        this.$favorites = document.querySelector('#saved');
        this.$categories = document.querySelector('#categories');

        // Items dealing with the main content
        this.$content = document.querySelector('#content');
        this.$noTop = document.querySelector('#nocontent');
        this.$loading = document.querySelector('#loadingcontent');

        this.newsItemComponents = new NewsItemComponent();
        this.newsCaroselComponent = new CaroselComponent();
        this.newsFavoritesComponent = new FavoritesComponent();

        this.articleModal = new ArticleModal();
        this.summaryModal = new SummaryModal();


    }

    populateFavoritesSidebar(favorites) {
        this.$favorites.innerHTML = this.newsFavoritesComponent.buildFavorites(favorites);
    }
    populateTopStoriesCarosel(topstories) {
        if (topstories != null && topstories.length > 0) {
            // There are stories
           
            this.$carouselIndicators.innerHTML = this.newsCaroselComponent.buildCarouselIndicators(topstories);
            this.$carouselInner.innerHTML = this.newsCaroselComponent.buildCarouselItems(topstories);

            this.$carousel.classList.remove("visually-hidden");
            this.$loadingTop.classList.add("visually-hidden");
        }
        else {
            // No stories found, show error, hide carousel
            this.$loadingTop.classList.add("visually-hidden");
            this.$noTopContent.classList.remove("visually-hidden");
        }
    }
    populateAllNewsContentArea(content) {
        let populatedContentArea = this.newsItemComponents.buildAllNewsItems(content);
        this.$content.innerHTML = populatedContentArea;
        //this.$noTop.classList.add("visually-hidden");
        //this.$loading.classList.add("visually-hidden");
    }

    // TODO: These are old methods that were moved here from the original news.js file. They need to be refactored.
    async openStory(url, uuid) {
        // Check and see if we have the story, if not, do a fetch
        let story = this.articleStorage.getItem(uuid);
        if (story == null) {
            story = await this.apiController.fetchArticle(url);
            this.articleStorage.addItem(uuid, story);
        }

        this.articleModal.showModal(story.data);

        
    }
    async openSummary(summary, isFavorited) {
        this.summaryModal.showModal(summary, isFavorited);

        //let url = new Url(ARTICLE_URL, {url: summary.url, api_token: ARTICLE_TOKEN});
        //this.addSummaryEventHandlers(url.toString(), summary.uuid, isFavorited);
    }



}