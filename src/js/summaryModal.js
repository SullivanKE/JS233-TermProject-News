import './general';
import * as bootstrap from 'bootstrap';
import { Debug } from './debug';
export class SummaryModal {
    constructor() {
        this.debugging = true;
        this.prefix = "summaryModal.js";
        this.debug = new Debug(this.prefix, this.debugging);

        this.$modal = document.querySelector("#summaryModal");
        this.$modalHeader = document.querySelector("#summaryModalHeader");
        this.$modalBody = document.querySelector("#summaryModalBody");
        this.$modalFooter = document.querySelector("#summaryModalFooter");
        this.summaryModal = new bootstrap.Modal(this.$modal);

        this.showModal = this.showModal.bind(this);

        /*`<div id="summaryModal" class="modal fade modal-xl" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header" id="summaryModalHeader">
              <h5 class="modal-title" id="summaryModalLabel">Article name</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" id="summaryModalBody">
                <div class="row">
                <div class="col">
                <!--image-->
                </div>
                <div class="col">
                <!--Text-->
                <hr />
                <a href="#">link to article</a>
                </div>
            </div>
            <div class="d-flex flex-row">
                <div class="d-flex align-items-start">
                <button class="btn btn-primary">Read full article here</button>
                </div>
                <div class="d-flex align-items-end">
                <button class="btn btn-outline-success">Add to Favorites</button>
                </div>
            </div>
            </div>
            <div class="modal-footer" id="summaryModalFooter">
             
            </div>
          </div>
        </div>
      </div>`*/

      /*
        "uuid": "fe01d54c-42b2-42a9-be2c-f820ede296fe",
        "title": "Jays' Anthony Bass says anti-LGBTQIA+ post he shared wasn't hateful",
        "description": "Blue Jays pitcher Anthony Bass said Thursday that he didn't believe the post he shared, which described the sale of LGBTQIA+ merchandise as",
        "keywords": "",
        "snippet": "TORONTO -- Toronto Blue Jays pitcher Anthony Bass said Thursday he doesn't believe an anti-LGBTQIA+ social media post he shared last month was hateful.\n\nThe rig...",
        "url": "https://www.espn.com/mlb/story/_/id/37823206/jays-anthony-bass-says-anti-lgbtq+-post-shared-hateful",
        "image_url": "https://a4.espncdn.com/combiner/i?img=/photo/2023/0609/r1184409_1296x729_16-9.jpg",
        "language": "en",
        "published_at": "2023-06-09T05:24:23.000000Z",
        "source": "espn.com",
        "categories": [
            "sports",
            "general"
        ],
        "relevance_score": null,
        "locale": "us"
      */
    }
    closeModal() {
        this.summaryModal.close();
    }
    showModal(article) {
        this.$modalHeader.innerHTML = this.buildHeader(article.title);
        this.$modalBody.innerHTML = this.buildBody(article.image_url, article.url, article.description, article.published_at, article.source);
        this.$modalFooter.innerHTML = this.buildFooter(article.categories, article.uuid);

        this.debug.debug("modal body", this.$modalBody.innerHTML);

        this.summaryModal.show();
    }

    buildHeader(title) {
        return `<h5 class="modal-title" id="summaryModalLabel">${title}</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`;
    }
    buildBody(img, url, description, published_at, source) {
        let publishTime = new Date(Date.parse(published_at));
        return `<div class="row">
                    <div class="col p-3">
                        <!--image-->
                        <img src="${img}" class="img-fluid rounded m-0" />
                    </div>
                    <div class="col p-3">
                        <small class="fw-light">${publishTime.toDateString()}</small>
                        <!--Text-->
                        <p class="h-75">${description}... <button class="btn btn-link text-white m-0 p-0" id = "readFullArticleButton" data-bs-dismiss="modal" aria-label="Close">continue to full article here.</button></p>
                        <hr />
                        <div class="d-flex justify-content-between">
                            <div class="p-2">
                                <a href="${url}">Read on ${source}</a>
                            </div>
                            <div class="p-0">
                                <button class="btn btn-success m-0">Add to Favorites</button>
                            </div>
                        </div>
                    </div>
                </div>`;

    }
    buildFooter(categories, uuid) {
        let categoriesConcat = categories.join(', ');
        return `<div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight me-auto ">
                        <small class="text-muted">${categoriesConcat}</small>
                    </div>
                    <div class="p-2 bd-highlight">
                        <small class="text-muted">UUID: ${uuid}</small>
                    </div>
                </div>`;
            
    }
    

}