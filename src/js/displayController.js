import './general';
import { Debug } from './debug';

export class DisplayController {
    constructor() {
        this.debugging = true;
        this.prefix = "contentController.js";
        this.debug = new Debug(this.prefix, this.debugging)

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
       this.debug.debug("Top stories", topstories);

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
    displayContent(content) {

        this.debug.debug("Content", content);
        /*
         <div class="row-md">
          <div class="col-md m-2 p-2">

            <div class="card fancy_card">
              <div class="card-header">
                <h5 class="text-center">Example news headline</h5>
              </div>
              <div class="card-body">
                <figure class="figure">
                  <img src="/img/examples/1_TzaiFDmkiEkOxNU7eG43pw.jpg" class="figure-img card_image" />
                  <figcaption class="figure-caption text-white small">Snippit of the article. This could go on for a
                    little bit...</figcaption>
                </figure>
              </div>
              <div class="card-footer text-muted text-center">
                UUID: 20cd4fa6-5ef4-49b2-978a-12242a15a538
              </div>

            </div>

          </div>
        </div>
        */

        
        if (content != null && content.length > 0) {
            // Content found, build stuff

            // For testing
            //content = content.concat(content, content, content, content, content);

            let items = "";
            for (let i = 0; i < content.length; i++) {
                let mod = i % 2;
                let front = "";
                let rear = "";

                let img = content[i].image_url;
                if (img == undefined || img == null || img == "" || img == "...")
                    img = "./img/nocontent.png";

                // Two stories fit on a row, so mod 2 to add a row to an entry. 0 is a new row, 1 is the end of a row.
                // We also need to check if this is the last item in the list.
                if (mod == 0) {
                    front = `<div class="d-flex flex-row">`;
                }
                else if (mod == 1 || i + 1 == content.length) {
                    rear = `</div>`;
                }

                let middle = `  <div class="m-1">
                                    <div class="card fancy_card m-1 h-100" name="article" data-uuid="${content[i].uuid}">
                                        <div class="card-header">
                                            <h5 class="text-center">${content[i].title.substr(0, this.titleLength)}...</h5>
                                        </div>
                                        <div class="card-body">
                                            <figure class="figure">
                                                <img src="${img}" class="figure-img card_image img-fluid" />
                                                <figcaption class="figure-caption text-white small">${content[i].description.substr(0, this.descLength)}...</figcaption>
                                            </figure>
                                        </div>
                                        <div class="card-footer text-muted text-center">
                                            UUID: ${content[i].uuid}
                                        </div>
                                    </div>
                                </div>`;

                items += front + middle + rear;
            }

            // Display content
            this.$content.innerHTML = items;

        }
        else {
            // No content
            this.$content.innerHTML = "No content found...";

        }

    }
}