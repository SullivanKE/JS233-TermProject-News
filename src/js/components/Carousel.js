// Returns the html required to form the carousel for the main page

export default class carouselComponent {
    #maximumTitleLength = 30;
    #maximumDescriptionLength = 70;

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
}