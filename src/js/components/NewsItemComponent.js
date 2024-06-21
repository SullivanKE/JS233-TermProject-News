// Returns the main content portion of the news application


export default class NewsItemComponent {
    constructor() {

    }

    displayContent(content) {

        this.debug.debug("Content", content);

        
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
    // TODO: Add new method that is responsible for one item
}