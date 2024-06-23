// Returns the main content portion of the news application

export default class NewsItemComponent {
    #maximumTitleLength = 30;
    #maximumDescriptionLength = 70;

    buildItemCard(item) {
        const img = item.image_url || "./img/nocontent.png";
        return `<div class="m-1">
                    <div class="card fancy_card m-1 h-100" name="article" data-uuid="${item.uuid}">
                        <div class="card-header">
                            <h5 class="text-center">${item.title.substr(0, this.#maximumTitleLength)}...</h5>
                        </div>
                        <div class="card-body">
                            <figure class="figure">
                                <img src="${img}" class="figure-img card_image img-fluid" />
                                <figcaption class="figure-caption text-white small">${item.description.substr(0, this.#maximumDescriptionLength)}...</figcaption>
                            </figure>
                        </div>
                        <div class="card-footer text-muted text-center">
                            UUID: ${item.uuid}
                        </div>
                    </div>
                </div>`;
    }

    buildAllNewsItems(newsItems) {
        if (newsItems && newsItems.length > 0) {
            const items = newsItems.map((item) => {
                const front = item.index % 2 === 0 ? `<div class="d-flex flex-row">` : "";
                const rear = item.index % 2 === 1 || item.index === newsItems.length - 1 ? `</div>` : "";
                return front + this.buildItemCard(item) + rear;
            });

            return items.join("");
        } else {
            return "No content found...";
        }
    }

}