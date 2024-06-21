// Returns the html required to form the carosel for the main page

export default class CaroselComponent {
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

    }
    displayTopStories(topstories) {

        /*
        <!--Headlines-->

        <div class="carousel-indicators" id="headlineIndicators">
          <button type="button" data-bs-target="#headlinesCarousel" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        </div>


        <div class="carousel-inner" id="headlineInner">
          <div class="carousel-item active">
            <img src="/img/examples/1_TzaiFDmkiEkOxNU7eG43pw.jpg" class="d-block sliderItem" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>

        */

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
}