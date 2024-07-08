/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode } from '@ocdla/view/view';

import FeedItemTile from '../components/FeedItemTile.jsx';
import Image from '../components/Image.jsx';
export default class FeedItem {

    constructor(obj, favorite=false) {
        let maximumTitleLength = 30;
        let maximumSnippetLength = 70;


        this.uuid = obj.uuid;
        this.title = obj.title;
        this.shortTitle = obj.title.substr(0, maximumTitleLength) + "...";
        this.description = obj.description;
        this.keywords = obj.keywords;
        this.snippet = obj.snippet;
        this.shortSnippet = obj.snippet.substr(0, maximumSnippetLength) + "...";
        this.url = obj.url;
        this.image_url = obj.image_url ? obj.image_url : "../../img/nocontent.png";;
        this.language = obj.language;
        this.published_at = new Date(Date.parse(obj.published_at));
        this.source = obj.source;
        this.categories = obj.categories.join(", ");
        this.favorite = favorite;
    }

    renderTile() {
        return FeedItemTile(this, this.favorite);
    }

    renderImage() {
        return (
            <>
                <Image src={this.image_url} className="d-block sliderItem" uuid={this.uuid}/>
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="display-6">{this.shortTitle}</h1>
                    <p class="lead"><strong>{this.shortSnippet}</strong></p>
                </div>
            </>
        );
    }

    toggleFavorite() {
        this.favorite = !this.favorite;
    }

}