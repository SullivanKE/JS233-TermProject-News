/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
import Image from '../components/shared/Image.jsx';
import Video from '../components/shared/Video.jsx';
export default class Article {

    constructor(obj) {
        this.publish_date = new Date(Date.parse(obj.publish_date)).toDateString();
        this.source_url = obj.source_url;
        this.url = obj.url;
        this.title = obj.title;
        this.top_image = obj.top_image;
        this.authors = obj.authors.join(", ");
        this.text = obj.text.replaceAll('\n\n', )
        this.meta_site_name = obj.meta_site_name;
        this.tags = obj.tags.join(", ");
        this.images = this.renderImages(obj.images);
        this.videos = this.renderVideos(obj.videos);


        /*<div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="${videos[i]}" allowfullscreen></iframe>
        </div> */
    }
    cleanMediaUrls(media) {
        if (!media) return [];
        const re = new RegExp("^(http(s):\/\/.)");
        return media.filter(function (item) {
            return re.test(item);
        });
    }
    renderImages(images) {
    return this.cleanMediaUrls(images)
        .map((image) => {
            return <Image src={image} className="d-block sliderItem" />
        });
}
    renderVideos(videos) {
        return this.cleanMediaUrls(videos)
            .map((video) => {
                <Video src={video} className="d-block sliderItem"/>
        });

        /*<div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" src="${videos[i]}" allowfullscreen></iframe>
        </div> */
    }
    //render() {
        //return (this);
    //}

}