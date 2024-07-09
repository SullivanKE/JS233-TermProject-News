/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode } from '@ocdla/view/view';
import Image from '../components/shared/Image.jsx';
export default class FeedItem {

    static MAXIMUM_SNIPPET_LENGTH = 70;
    static MAXIMUM_TITLE_LENGTH = 30;

    constructor(obj, favorite=false) {
        //let maximumTitleLength = 30;
        //let maximumSnippetLength = 70;


        this.uuid = obj.uuid;
        this.title = obj.title;
        this.shortTitle = obj.title.substr(0, FeedItem.MAXIMUM_TITLE_LENGTH) + "...";
        this.description = obj.description;
        this.keywords = obj.keywords;
        this.snippet = obj.snippet;
        this.shortSnippet = obj.snippet.substr(0, FeedItem.MAXIMUM_SNIPPET_LENGTH) + "...";
        this.url = obj.url;
        this.image_url = obj.image_url ? obj.image_url : "../../img/nocontent.png";;
        this.language = obj.language;
        this.published_at = new Date(Date.parse(obj.published_at));
        this.source = obj.source;
        this.categories = obj.categories.join(", ");
        this.favorite = favorite;
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