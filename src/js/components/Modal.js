import * as bootstrap from 'bootstrap';
import Article from './Article';
import Summary from './Summary';
export default class Model {
    constructor(contentType) {

        this.$modal = document.querySelector("#" + contentType + "Modal");
        /*
        this.$modalHeader = document.querySelector("#" + modalPrefix + "ModalHeader");
        this.$modalBody = document.querySelector("#" + modalPrefix + "ModalBody");
        this.$modalFooter = document.querySelector("#" + modalPrefix + "ModalFooter");
        this.$carousel = document.querySelector("#" + modalPrefix + "ModalCarousel");
        */

        this.modal = new bootstrap.Modal(this.$modal);
    }
    closeModal() {
      this.modal.close();
    }

    content(html) {
      $modalHeader = document.querySelector("#" +  + "ModalHeader");
      $modalBody = document.querySelector("#" +  + "ModalBody");
      $modalFooter = document.querySelector("#" +  + "ModalFooter");
      $carousel = document.querySelector("#" +  + "ModalCarousel");
    }


    showModal(article, favorite = null) {
        
        
        if (this.isArticleModal) {
          this.$modalHeader.innerHTML = this.buildArticleHeader(article.title, article.url);
          this.$carousel.innerHTML = this.buildArticleImageCarousel(article.images, article.videos);
          this.$modalBody.innerHTML = this.buildArticleBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text);
          this.$modalFooter.innerHTML = this.buildArticleFooter(article.tags, article.url);
        }
        else {
          this.$modalHeader.innerHTML = this.buildSummaryHeader(article.title);
          this.$modalBody.innerHTML = this.buildSummaryBody(article.image_url, article.url, article.description, article.published_at, article.source, favorite);
          this.$modalFooter.innerHTML = this.buildSummaryFooter(article.categories, article.uuid);
        }
          
        this.modal.show();
    }
    buildArticleHeader(title, url) {
        // TODO: Check if it is favorited for the favorite button
        return `<a href="${url}"><strong class="modal-title" id="newsModalLabel">${title}</strong></a>
        
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`
    }
    buildImageCarousel(images, videos) {
        //^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$
        const re = new RegExp("^(http(s):\/\/.)");
        // Cleans the arrays
        images = images.filter(function (item) {
            return re.test(item);
        });
        videos = videos.filter(function (item) {
            return re.test(item);
        });

        let indicators = "";
        let imageList = "";
        let videoList = "";

        let active = `class="active"
        aria-current="true"`;
        for (let i = 0; i < images.length + videos.length; i++) {
            indicators = `${indicators}<button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="${i}" ${active}></button>`
            active = `aria-current="false"`;
        }

        active = "active";
        for (let i = 0; i < videos.length; i++) {
            videoList = `${videoList}<div class="carousel-item ${active}">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="${videos[i]}" allowfullscreen></iframe>
                </div>
            </div>`
            active = "";
        }

        for (let i = 0; i < images.length; i++) {
            imageList = `${imageList}<div class="carousel-item ${active}">
                <img src="${images[i]}" class="d-block sliderItem" alt="...">
            </div>`
            active = "";
        }


        let completeModalCarousel = `<div class="carousel-indicators">${indicators}</div><div class="carousel-inner">${videoList}${imageList}</div><button class="carousel-control-prev" type="button" data-bs-target="#modalCarousel"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#modalCarousel"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>`;
        return completeModalCarousel;

        /*
        <div class="m-1 p-1 headlines">
      <div id="headlinesCarousel" class="carousel slide visually-hidden">
        <div class="carousel-indicators" id="headlineIndicators">
          <button type="button" data-bs-target="#headlinesCarousel" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
        </div>
        <div class="carousel-inner" id="headlineInner">
          <div class="carousel-item active">
            <img src="#" class="d-block sliderItem" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#headlinesCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#headlinesCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        */


    }
    buildArticleBody(topImage, authors, published, siteName, source, text) {
        // Loop through authors
        let authorList = "";
        published = new Date(Date.parse(published));
        for (let i = 0; i < authors.length; i++) {
            authorList += authors[i];
            if (i + 1 < authors.length)
            authorList += ", "
        }
        
        return `<div class="row">
        <div class="col">
          <!--Top Image-->
          <img src="${topImage}" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-grow-1 bd-highlight">
            <!--Authors-->
            <small>${authorList}</small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Link-->
            <small><a href="${source}">${siteName}</a></small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Publication date-->
            <small>${published.toDateString()}</small>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>
          ${text}
        </p>
      </div>`;
    }
    buildArticleFooter(tags, url) {
        // Loop through tags
        let tagList = "";
        for (let i = 0; i < tags.length; i++) {
            tagList += tags[i];
            if (i + 1 < tags.length)
                tagList += ", "
        }
        return `<div class="row">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <!--tags-->
            <small>${tagList}</small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Link-->
            <small><a href="${url}">${url}</a></small>
          </div>
        </div>
      </div>`;
    }

    

  buildSummaryHeader(title) {
      return `<h5 class="modal-title" id="summaryModalLabel">${title}</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`;
  }
  buildSummaryBody(img, url, description, published_at, source, favorite) {
      let publishTime = new Date(Date.parse(published_at));
      let btnstyle = "btn-success";
      let btntext = "Add to Favorites";
      if (favorite) {
          btnstyle = "btn-danger";
          btntext = "Remove from Favorites";
      }
      if (img == undefined || img == null || img == "")
          img = "./img/nocontent.png";
          
      return `<div class="row">
                  <div class="col p-3 h-100">
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
                              <button id="favoritebtn" class="btn ${btnstyle} m-0">${btntext}</button>
                          </div>
                      </div>
                  </div>
              </div><br /><br />`;

  }
  buildSummaryFooter(categories, uuid) {
      let categoriesConcat = categories.join(', ');
      return `<div class="d-flex bd-highlight">
                  <div class="p-2 bd-highlight me-auto ">
                      <small class="text-white">${categoriesConcat}</small>
                  </div>
                  <div class="p-2 bd-highlight">
                      <small class="text-white">UUID: ${uuid}</small>
                  </div>
              </div>`;
          
  }   
}