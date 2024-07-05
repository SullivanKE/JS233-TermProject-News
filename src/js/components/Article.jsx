/** @jsx vNode */
import { vNode } from "@ocdla/view/view";
import Carousel from "./Carousel";

export default function ArticleModalView(article) {
  let carousel = new Carousel(
    article.images.concat(article.videos),
    "#articleModalCarousel"
  );
  return (
    <>
      <div class="modal-header">
        <a href={article.url}>
          <strong class="modal-title" id="newsModalLabel">
            {article.title}
          </strong>
        </a>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>

      <div class="modal-body">
        <div class="row">
          <div class="col">
            <img src={article.top_image} class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
              <small>{article.authors}</small>
            </div>
            <div class="p-2 bd-highlight">
              <small>
                <a href={article.source_url}>{article.meta_site_name}</a>
              </small>
            </div>
            <div class="p-2 bd-highlight">
              <small>{article.publish_date.toDateString()}</small>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p>{article.text}</p>
        </div>
      </div>

      <div class="carousel slide">{carousel}</div>

      <div class="modal-footer m-2">
        <div class="row">
          <div class="d-flex bd-highlight">
            <div class="p-2 bd-highlight">
              <small>{article.tags}</small>
            </div>
            <div class="p-2 bd-highlight">
              <small>
                <a href={article.url}>{article.url}</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
