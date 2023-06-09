import './debug';
export class Modal {
    constructor() {
        this.debugging = true;

        this.$modal = document.querySelector('#newsStoryModal');
        this.$modalHeader = document.querySelector('#modalHeader');
        this.$carouselInner = document.querySelector('#modalCarouselInner');
        this.$modalBody = document.querySelector('#modalBody');
        this.$modalFooter = document.querySelector('#modalFooter');
    }
    showModal(article) {
        // Make header
        this.$modalHeader.innerHTML = this.buildHeader(article.title, article.url);

        // Make image carousel
        this.#carousel.innerHTML = this.buildImageCarousel(article.images, article.videos);

        // Make body
        //modalText += this.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.url, article.text);

        // Make footer
        //modalText += this.buildFooter(article.tags, article.url)

        this.$modal.showModal();
    }
    buildHeader(title, url) {
        return `<a href="${url}"><h5 class="modal-title" id="newsModalLabel">${title}</h5></a>
        <div class="btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-outline-warning active">
            <input type="checkbox" checked autocomplete="off"> Favorite
          </label>
        </div>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>`
    }
    buildImageCarousel(images, videos) {
        //^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$
        const re = new RegExp("^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$");
        // Cleans the arrays
        images = images.filter(i => re.test(i));
        videos = videos.filter(v => re.test(v));


        let indicators = "";
        let imageList = "";
        let videoList = "";

        let active = `class="active"
        aria-current="true"`;
        for (let i = 0; i < images.length + videos.length; i++) {
            indicators += `<button type="button" data-bs-target="#modalCarousel" data-bs-slide-to="${i}" ${active}></button>`
            active = `aria-current="false"`;
        }

        active = "active";
        for (let i = 0; i < videos.length; i++) {
            videoList += `<div class="carousel-item ${active}">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/oiKj0Z_Xnjc" allowfullscreen></iframe>
                </div>
            </div>`
            active = "";
        }


        for (let i = 0; i < images.length; i++) {
            imageList += `<div class="carousel-item ${active}">
                <img src="/img/examples/1_TzaiFDmkiEkOxNU7eG43pw.jpg" class="d-block sliderItem" alt="...">
            </div>`
            active = "";
        }

        return 

    }
    buildBody(topImage, authors, published, siteName, source, url, text) {

    }
    buildFooter(tags, url) {

    }
}