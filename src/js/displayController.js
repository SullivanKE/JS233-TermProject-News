import './General';
import NewsItemComponent from './components/NewsItemComponent';

export default class DisplayController {
    constructor() {

        // Config info
        this.titleLength = 30;
        this.descLength = 70;

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


    }

    displayFavorites(favorites) {
        let content = "";


        if (favorites.length == 0) {
            // No favorites
            content = "<li>Nothing is saved, try adding something.</li>"
        }
        else {
            for (let i = 0; i < favorites.length; i++) {
                // For each favorites, build a listing
                content += `<li class="mb-3 border rounded">
                                <img class="img-thumbnail" src="${favorites[i].image_url}" /><button class="btn btn-link p-0" name="article" data-uuid="${favorites[i].uuid}">${favorites[i].title.substr(0, this.titleLength)}...</button>
                            </li>`;
            }
        }
        this.$favorites.innerHTML = content;

    }
    displayTopStories(topstories) {
        console.log(topstories);
        let indicators = "";
        let items = "";
        let active = `class="active"
        aria-current="true"`;

        if (topstories != null && topstories.length > 0) {
            // There are stories
            // Build indicators
            for (let i = 0; i < topstories.length; i++) {
                indicators += `<button type="button" data-bs-target="#headlinesCarousel" data-bs-slide-to="${[i]}" ${active} aria-label="${topstories[i].title.substr(0, this.titleLength)}..."></button>`;
                active = "";
            }
                
            // Build images
            active = "active";
            for (let i = 0; i < topstories.length; i++) {
                let img = topstories[i].image_url;
                if (img == undefined || img == null || img == "" || img == "...")
                    img = "./img/nocontent.png";
                items += `  <div class="carousel-item ${active}" name="article" data-uuid="${topstories[i].uuid}">
                                <img src="${img}" class="d-block sliderItem" alt="${topstories[i].title}">
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>${topstories[i].title.substr(0, this.titleLength)}...</h5>
                                    <p>${topstories[i].description.substr(0, this.descLength)}...</p>
                                </div>
                            </div>`;
                active = "";
            }

            this.$carouselIndicators.innerHTML = indicators;
            this.$carouselInner.innerHTML = items;

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
}