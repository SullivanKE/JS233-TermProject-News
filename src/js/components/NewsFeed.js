/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
export default class NewsFeed {

    constructor(feedItems) {
        this.$content = document.querySelector('#news-feed');
        this.$noTop = document.querySelector('#nocontent');
        this.$loading = document.querySelector('#loadingcontent');

        // This is taking in the data and doing a parseForecast on it. It's basically making it into an object.
        //
        // this.forecast = new DayForecast(data); 
        // Object.assign(this, ({ city, unitType }));

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