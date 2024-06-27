import NewsItemComponent from './components/FeedItem';
import carouselComponent from './components/Carousel';
import FavoritesComponent from './components/Favorites';

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
        this.$content = document.querySelector('#news-feed');
        this.$noTop = document.querySelector('#nocontent');
        this.$loading = document.querySelector('#loadingcontent');

        this.newsItemComponents = new NewsItemComponent();
        this.newscarouselComponent = new carouselComponent();
        this.newsFavoritesComponent = new FavoritesComponent();

        
        this.articleModal = new ArticleModal();
        

        


    }

    populateFavoritesSidebar(favorites) {
        this.$favorites.innerHTML = this.newsFavoritesComponent.buildFavorites(favorites);
    }
    populateTopStoriescarousel(topstories) {
        if (topstories != null && topstories.length > 0) {
            // There are stories
           
            this.$carouselIndicators.innerHTML = this.newscarouselComponent.buildCarouselIndicators(topstories);
            this.$carouselInner.innerHTML = this.newscarouselComponent.buildCarouselItems(topstories);

            this.$carousel.classList.remove("visually-hidden");
            this.$loadingTop.classList.add("visually-hidden");

            this.addEventHandlers(this.$carouselInner, topstories);
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
        this.render(this.$content, content);
        //this.$noTop.classList.add("visually-hidden");
        //this.$loading.classList.add("visually-hidden");
    }



    

    
    

    

    /*
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

    render($forecastSummaries, $forecastDetails) {
        const displayForecastDetails = data => {
            const index = data.index;

            if (!index) return false;

            $forecastDetails.innerHTML = ForecastDetails(this.forecast[data.index], this.city, this.unitType);
            $forecastDetails.classList.remove('d-none');
        };

        this.delegate('click', $forecastSummaries, displayForecastDetails);

        return this.forecast.map((day, i) => DayForecastSummary(day, i, this.unitType)).join('\n');
    };
    */


}