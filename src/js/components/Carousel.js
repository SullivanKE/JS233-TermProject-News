/** @jsx vNode */
import { vNode } from '@ocdla/view/view';

// Returns the html required to form the carousel for the main page given an array of html nodes and
// optionally the data-target, or the id of the carousel itself to be used in the carousel controls.
// Finally, you may pass in an array of string labels for the indicators. This should be the same size as the nodes.
// Without a dataTarget, the carousel will not use controls.
// Without indicatorLabels or a dataTarget, the carousel will not use indicators.
// This is formatted as 

// nodes = [<img.../>, <img.../>, <img.../>] 
// dataTarget = "#carouselExample"
// indicatorLabels = ["Image 1", "Image 2", "Image 3"]

export default class Carousel {
    static content(nodes, dataTarget = null, indicatorLabels = null) {
        // Indicators in a carousel require a data-target, as do the controls.
        let carouselIndicators = indicatorLabels && dataTarget ? <div class="carousel-indicators">{Carousel.buildCarouselIndicators(indicatorLabels, dataTarget)}</div> : "";
        let carouselControls = dataTarget ? Carousel.buildCarouselControls(dataTarget) : "";

        // Build the actual carousel items
        let carouselItems = Carousel.buildCarouselItems(nodes);

        // Return the carousel with everything plugged in.
        return (<>
        {carouselIndicators}
        <div class="carousel-inner">
            {carouselItems}
        </div>
        {carouselControls}
        </>);
    }

    // Indicators take an array of equal size as the nodes and a data-target.
    static buildCarouselIndicators(labels, dataTarget) {
        // Map each label to a carousel indicator with the first item being active and join all jsx
        return labels.map((label, index) => {
            const nodeClass = index === 0 ? "active" : "";
            const ariaCurrent = index === 0 ? "true" : "false";
            return (
                    <button type="button" data-bs-target={dataTarget} data-bs-slide-to={index} class={nodeClass} aria-current={ariaCurrent} aria-label={label}></button>                 
            );
        }).join("\n");
    }

    // Carousel items take the html node array and sandwich them between carousel-item div tags.
    // You should be doing your HTML work before building the array for each item.
    static buildCarouselItems(nodes) {
        return nodes.map((n, index) => {
            const nodeClass = "carousel-item" + index === 0 ? " active" : "";
            return (
                <div class={nodeClass}>
                    {n}                    
                </div>
            );
        }).join("\n");
    }

    // If there is a dataTarget then the carousel will use controls. This just plug and plays the data-target into the correct position.
    static buildCarouselControls(dataTarget) {
        return (<>
            <button class="carousel-control-prev" 
                    type="button" 
                    data-bs-target={dataTarget}
                    data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" 
                    type="button" 
                    data-bs-target={dataTarget}
                    data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </>);
    }

    // TODO: Remove this when I am finished with the carousel and places it is called. Code is here only for reference as I refactor.

    // for (let i = 0; i < videos.length; i++) {
    //     videoList = `${videoList}<div class="carousel-item ${active}">
    //         <div class="embed-responsive embed-responsive-16by9">
    //             <iframe class="embed-responsive-item" src="${videos[i]}" allowfullscreen></iframe>
    //         </div>
    //     </div>`
    //     active = "";
    // }

    // for (let i = 0; i < images.length; i++) {
    //     imageList = `${imageList}<div class="carousel-item ${active}">
    //         <img src="${images[i]}" class="d-block sliderItem" alt="...">
    //     </div>`
    //     active = "";
    // }
}