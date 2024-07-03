import FeedItemModalView from '../components/FeedItemModalView';
import feedItemTile from '../components/FeedItemTile';
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
        this.categories = obj.categories;
        this.favorite = favorite;
    }
    renderModal() {
        return FeedItemModalView.toHtml(this, this.favorite);
    }

    renderTile() {
        return feedItemTile.toHtml(this, this.favorite);
    }

    toggleFavorite() {
        this.favorite = !this.favorite;
    }

}