/** @jsx vNode */
import { vNode } from "@ocdla/view/view";

// Returns the main content portion of the news application
export default function FeedItemTile({ title, snippet, image, uuid }) {
  return (
    <div
      class="col-sm-* card fancy_card m-0"
      name="article"
      data-uuid={uuid}
      data-content-type="summary"
    >
      <div class="card-header">
        <h3 class="text-white">{title}</h3>
      </div>
      <div class="card-body">
        <figure class="figure">
          {image ? (
            <img src={image} class="figure-img card_image img-fluid" />
          ) : (
            ""
          )}
          <figcaption class="figure-caption text-white small">
            {snippet}...
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
