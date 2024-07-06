/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
export default class NewsFeed {

    constructor({feedItems}) {
        this.feedItems = feedItems;
    }

    render() {
        let feedItemTiles = this.feedItems.map(item => item.renderTile());
        return (
        <div class="row row-cols-2 col-8 m-2 p-1 border border-light columnStyle" id="news-feed">
            {feedItemTiles}
        </div>);
    }
}