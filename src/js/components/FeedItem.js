/** @jsx vNode */
import { vNode } from '@ocdla/view/view';

// Returns the main content portion of the news application

export const feedItem = function(item) {
    let maximumTitleLength = 30;
    let maximumDescriptionLength = 70;

    const img = item.image_url ? item.image_url : "./img/nocontent.png";
    return (
                <div class="col-sm-* card fancy_card m-2" name="article" data-uuid="${item.uuid}" data-content-type="summary">
                    <div class="card-header">
                        <h5 class="text-center text-white">${item.title.substr(0, maximumTitleLength)}...</h5>
                    </div>
                    <div class="card-body">
                        <figure class="figure">
                            <img src="${img}" class="figure-img card_image img-fluid" />
                            <figcaption class="figure-caption text-white small">${item.description.substr(0, maximumDescriptionLength)}...</figcaption>
                        </figure>
                    </div>
                    <div class="card-footer text-white text-center">
                        UUID: ${item.uuid}
                    </div>
                </div>
    );
}

export default feedItem;