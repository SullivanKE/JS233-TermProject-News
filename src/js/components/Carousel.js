// Returns the html required to form the carousel for the main page

export default class Carousel {
    #maximumTitleLength = 30;
    #maximumDescriptionLength = 70;

    static content() {
        return `
        <div class="carousel-indicators">
            ${indicators}
        </div>
        <div class="carousel-inner">
            ${videoList}${imageList}
        </div>
        <button class="carousel-control-prev" 
                type="button" 
                data-bs-target="#modalCarousel"
                data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" 
                type="button" 
                data-bs-target="#modalCarousel"
                data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>`;
    }

    buildCarouselIndicators(newsStories) {
        let indicators = '';
        let activeClass = 'class="active" aria-current="true"';
        for (let i = 0; i < newsStories.length; i++) {
            let title = newsStories[i].title.substr(0, this.#maximumTitleLength);
            indicators += `<button type="button" data-bs-target="#headlinesCarousel" data-bs-slide-to="${i}" ${activeClass} aria-label="${title}..."></button>`;
            activeClass = '';
        }
        return indicators;
    }
    buildCarouselItems(newsStories) {
        let items = newsStories.map((story, index) => {
            const imageUrl = story.image_url || "./img/nocontent.png";
            const title = story.title.substr(0, this.#maximumTitleLength) + "...";
            const description = story.description.substr(0, this.#maximumDescriptionLength) + "...";
            return `
                <div class="carousel-item ${index === 0 ? "active" : ""}" name="article" data-uuid="${story.uuid}">
                    <img src="${imageUrl}" class="d-block sliderItem" alt="${story.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${title}</h5>
                        <p>${description}</p>
                    </div>
                </div>
            `;
        }).join("");
        return items;
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
}