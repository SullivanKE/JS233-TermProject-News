import ArticleView from '../components/ArticleModalView';
import Image from '../components/Image';
import Video from '../components/Video';
export default class Article {

    constructor(obj) {
        this.publish_date = new Date(Date.parse(obj.publish_date));
        this.source_url = obj.source_url;
        this.url = obj.url;
        this.title = obj.title;
        this.top_image = obj.top_image;
        this.authors = obj.authors.join(", ");
        this.text = obj.text;
        this.meta_site_name = obj.meta_site_name;
        this.tags = obj.tags.join(", ");
        this.images = this.cleanMediaUrls(obj.images).map((url) => new Image({ src: url, className: "d-block sliderItem" }));
        this.videos = this.cleanMediaUrls(obj.videos).map((url) => new Video({ src: url }));

        /*<div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="${videos[i]}" allowfullscreen></iframe>
        </div> */
    }
    cleanMediaUrls(media) {
        const re = new RegExp("^(http(s):\/\/.)");
        return media.filter(function (item) {
            return re.test(item);
        });
    }
    render() {
        return ArticleView.toHtml(this);
    }

}