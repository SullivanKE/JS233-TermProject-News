export default class Summary {
    static toHtml(article, favorite) {
        return `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header" id="summaryModalHeader">
                    ${Summary.buildHeader(article.title)}
                </div>
                <div class="modal-body" id="summaryModalBody">
                    <div class="row">
                        ${Summary.buildBody(article.image_url, article.url, article.description, article.published_at, article.source, favorite)}
                    </div>
                    <div class="d-flex flex-row">
                    <div class="d-flex align-items-start">
                        <button class="btn btn-primary">Read full article here</button>
                    </div>
                    <div class="d-flex align-items-end">
                        <button class="btn btn-outline-success">Add to Favorites</button>
                    </div>
                    </div>
                </div>
                <div class="modal-footer" id="summaryModalFooter">
                    ${Summary.buildFooter(article.categories, article.uuid)}
                </div>
                </div>
            </div>
        `;
    }

    static buildHeader(title) {
        return `<h5 class="modal-title" id="summaryModalLabel">${title}</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>`;
    }
    static buildBody(img, url, description, published_at, source, favorite) {
        let publishTime = new Date(Date.parse(published_at));
        let btnstyle = "btn-success";
        let btntext = "Add to Favorites";
        if (favorite) {
            btnstyle = "btn-danger";
            btntext = "Remove from Favorites";
        }
        if (img == undefined || img == null || img == "")
            img = "./img/nocontent.png";
            
        return `<div class="row">
                    <div class="col p-3 h-100">
                        <!--image-->
                        <img src="${img}" class="img-fluid rounded m-0" />
                    </div>
                    <div class="col p-3">
                        <small class="fw-light">${publishTime.toDateString()}</small>
                        <!--Text-->
                        <p class="h-75">${description}... <button class="btn btn-link text-white m-0 p-0" id = "readFullArticleButton" data-bs-dismiss="modal" aria-label="Close">continue to full article here.</button></p>
                        <hr />
                        <div class="d-flex justify-content-between">
                            <div class="p-2">
                                <a href="${url}">Read on ${source}</a>
                            </div>
                            <div class="p-0">
                                <button id="favoritebtn" class="btn ${btnstyle} m-0">${btntext}</button>
                            </div>
                        </div>
                    </div>
                </div><br /><br />`;

    }
    static buildFooter(categories, uuid) {
        let categoriesConcat = categories.join(', ');
        return `<div class="d-flex bd-highlight">
                    <div class="p-2 bd-highlight me-auto ">
                        <small class="text-muted">${categoriesConcat}</small>
                    </div>
                    <div class="p-2 bd-highlight">
                        <small class="text-muted">UUID: ${uuid}</small>
                    </div>
                </div>`;
            
    }   

}