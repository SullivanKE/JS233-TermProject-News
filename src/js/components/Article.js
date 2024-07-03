import Carousel from "./Carousel";
export default class Article {
    static toHtml(article) {
      let carousel = new Carousel();
      return `
          <div class="modal-header">
            ${Article.buildHeader(article.title, article.url)}
          </div>
          <div class="modal-body">
            ${Article.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text)}
          </div>
          <div class="carousel slide">
            ${carousel}
          </div>
          <div class="modal-footer m-2">
            ${Article.buildFooter(article.tags, article.url)}
          </div>`;
    }
    static buildHeader(title, url) {
        return `<a href="${url}"><strong class="modal-title" id="newsModalLabel">${title}</strong></a>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`
    }
    
    static buildBody(topImage, authors, published, siteName, source, text) {
        // Loop through authors
        let authorList = "";
        published = new Date(Date.parse(published));
        for (let i = 0; i < authors.length; i++) {
            authorList += authors[i];
            if (i + 1 < authors.length)
            authorList += ", "
        }
        
        return `<div class="row">
        <div class="col">
          <!--Top Image-->
          <img src="${topImage}" class="img-fluid" />
        </div>
      </div>
      <div class="row">
        <div class="d-flex bd-highlight">
          <div class="p-2 flex-grow-1 bd-highlight">
            <!--Authors-->
            <small>${authorList}</small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Link-->
            <small><a href="${source}">${siteName}</a></small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Publication date-->
            <small>${published.toDateString()}</small>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>
          ${text}
        </p>
      </div>`;
    }
    static buildFooter(tags, url) {
        // Loop through tags
        let tagList = "";
        for (let i = 0; i < tags.length; i++) {
            tagList += tags[i];
            if (i + 1 < tags.length)
                tagList += ", "
        }
        return `<div class="row">
        <div class="d-flex bd-highlight">
          <div class="p-2 bd-highlight">
            <!--tags-->
            <small>${tagList}</small>
          </div>
          <div class="p-2 bd-highlight">
            <!--Link-->
            <small><a href="${url}">${url}</a></small>
          </div>
        </div>
      </div>`;
    }
}
/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
import Carousel from "./Carousel";

// TODO: This class has logic inside of it that it shouldn't. Once I have my models for articles and summaries I should revisit this and input the correct data
// rather than formatting it here.

export default class Article {
    static toHtml(article) {
      let carousel = new Carousel();
      // TODO: Sort carousel items where this is called and pass it in the parameters then through to Carousel.
      return (<>
          <div class="modal-header">
            {Article.buildHeader(article.title, article.url)}
          </div>
          <div class="modal-body">
            {Article.buildBody(article.top_image, article.authors, article.publish_date, article.meta_site_name, article.source_url, article.text)}
          </div>
          <div class="carousel slide">
            {carousel}
          </div>
          <div class="modal-footer m-2">
            {Article.buildFooter(article.tags, article.url)}
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
        // Loop through authors
        let authorList = authors.join(", ");
        published = new Date(Date.parse(published));
        
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
        // Loop through tags
        let tagList = tags.join(", ");
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