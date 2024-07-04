/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
import Carousel from "./Carousel";

// TODO: This class has logic inside of it that it shouldn't. Once I have my models for articles and summaries I should revisit this and input the correct data
// rather than formatting it here.

export default class ArticleModalView {
    static toHtml(article) {
      let carousel = new Carousel(article.images.concat(article.videos));
      return (<>
          <div class="modal-header">
            {ArticleView.buildHeader(article.title, article.url)}
          </div>
          <div class="modal-body">
            {ArticleView.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text)}
          </div>
          <div class="carousel slide">
            {carousel}
          </div>
          <div class="modal-footer m-2">
            {ArticleView.buildFooter(article.tags, article.url)}
          </div>
      </>);
    }

    static buildHeader(title, url) {
        return (<>
                <a href={url}><strong class="modal-title" id="newsModalLabel">{title}</strong></a>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </>);
    }
    
    static buildBody(topImage, authors, published, siteName, source, text) {  
        return (<>
        <div class="row">
          <div class="col">
            <img src={topImage} class="img-fluid" />
          </div>
        </div>
        <div class="row">
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight">
              <small>{authorList}</small>
            </div>
            <div class="p-2 bd-highlight">
              <small><a href={source}>{siteName}</a></small>
            </div>
            <div class="p-2 bd-highlight">
              <small>{published.toDateString()}</small>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p>
            {text}
          </p>
        </div></>);
    }


    static buildFooter(tags, url) {
        return (
        <div class="row">
          <div class="d-flex bd-highlight">
            <div class="p-2 bd-highlight">
              <small>{tagList}</small>
            </div>
            <div class="p-2 bd-highlight">
              <small><a href={url}>{url}</a></small>
            </div>
          </div>
        </div>);
    }
}