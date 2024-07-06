/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode } from '@ocdla/view/view';
import Carousel from "./Carousel.jsx";
export default class TopStories {

    constructor({feedItems}) {
        this.feedItems = feedItems;
    }

    render() {
        let nodes = this.feedItems.map(item => item.renderImage());
        return (
            <div class="m-1 p-1 headlines" id="top-stories">
                <Carousel nodes={nodes} identifier="headlinesCarousel" />
            </div>
        );
    }
}