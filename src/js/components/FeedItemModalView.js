/** @jsx vNode */
import { vNode } from '@ocdla/view/view';

export default class FeedItemModalView {
    static toHtml(summary) {
        return (<>
                <div class="modal-header" id="summaryModalHeader">
                    {FeedItemModalView.buildHeader(summary.title)}
                </div>
                <div class="modal-body" id="summaryModalBody">
                    <div class="row">
                        {FeedItemModalView.buildBody(summary.image_url, summary.url, summary.description, summary.published_at, summary.source, summary.favorite)}
                    </div>
                </div>
                <div class="modal-footer" id="summaryModalFooter">
                    {FeedItemModalView.buildFooter(summary.categories, summary.uuid)}
                </div>
        </>);
    }

    static buildHeader(title) {
        return (<>
            <h5 class="modal-title" id="summaryModalLabel">{title}</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </>);
    }
    buildBody(img, url, description, published_at, source, favorite) {
        let btnstyle = "btn-success";
        let btnClass = "btn " + btnstyle + " m-0";
        let btntext = "Add to Favorites";
        if (favorite) {
            btnstyle = "btn-danger";
            btntext = "Remove from Favorites";
        }
            
        return (<>
                <div class="row">
                    <div class="col p-3 h-100">
                        <img src={img} class="img-fluid rounded m-0" />
                    </div>
                    <div class="col p-3">
                        <small class="fw-light">{published_at.toDateString()}</small>
                        <p class="h-75">
                            {description}... 
                            <button class="btn btn-link text-white m-0 p-0" 
                                    id = "readFullArticleButton" 
                                    data-bs-dismiss="modal" 
                                    aria-label="Close">
                                continue to full article here.
                            </button>
                        </p>
                        <hr />
                        <div class="d-flex justify-content-between">
                            <div class="p-2">
                                <a href={url}>Read on {source}</a>
                            </div>
                            <div class="p-0">
                                <button id="favoritebtn" class={btnClass}>{btntext}</button>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                    </>);
    }

    static buildFooter(categories, uuid) {
        return (<div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight me-auto ">
                        <small class="text-muted">{categories}</small>
                    </div>
                    <div class="p-2 bd-highlight">
                        <small class="text-muted">UUID: {uuid}</small>
                    </div>
                </div>);
            
    }   

}