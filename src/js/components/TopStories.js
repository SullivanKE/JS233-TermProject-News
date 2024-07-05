/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode } from '@ocdla/view/view';
import Carousel from "./Carousel.jsx";
export default class TopStories {

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

        let images = this.feedItems.map(item => item.renderImage());
        let headlines = this.feedItems.map(item => item.shortTitle);
        let nodes = new Array();
        for (let i = 0; i < headlines.length; i++) {
            nodes.push(<>
                {images[i]}
                <h5>{headlines[i]}</h5>
            </>)
        }
    
        return (
            <div class="m-1 p-1 headlines">
                <Carousel nodes={nodes} identifier="headlinesCarousel" />
            </div>
        );
    }
}