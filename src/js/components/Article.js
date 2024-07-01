import Carousel from "./Carousel";
export default class Article {
    static toHtml(article) {
      let carousel = new Carousel();
      return `
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header" id="articleModalHeader">
            ${Article.buildHeader(article.title, article.url)}
          </div>
          <div class="modal-body">
            <div id="articleModalBody">
              ${Article.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text)}
            </div>
          </div>
          <div id="articleModalCarousel" class="carousel slide">
            ${carousel}
          </div>
          <div class="modal-footer m-2" id="articleModalFooter">
            ${Article.buildFooter(article.tags, article.url)}
          </div>
        </div>
      </div>`;
    }
    static buildHeader(title, url) {
        return `<a href="${url}"><strong class="modal-title" id="newsModalLabel">${title}</strong></a>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`
    }
    static buildImageCarousel(images, videos) {
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

    }
    static buildBody(topImage, authors, published, siteName, source, text) {
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
    buildFooter(tags, url) {
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
}