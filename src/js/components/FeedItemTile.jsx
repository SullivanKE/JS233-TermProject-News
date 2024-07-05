/** @jsx vNode */
import { vNode } from "@ocdla/view/view";

// Returns the main content portion of the news application
export default function FeedItemTile(item) {
  return (
    <div
      class="col-sm-* card fancy_card m-2"
      name="article"
      data-uuid={item.uuid}
      data-content-type="summary"
    >
      <div class="card-header">
        <h5 class="text-center text-white">{item.shortTitle}...</h5>
      </div>
      <div class="card-body">
        <figure class="figure">
          <img src={item.image_url} class="figure-img card_image img-fluid" />
          <figcaption class="figure-caption text-white small">
            {item.shortSnippet}...
          </figcaption>
        </figure>
      </div>
      <div class="card-footer text-white text-center">UUID: {item.uuid}</div>
    </div>
  );
}
