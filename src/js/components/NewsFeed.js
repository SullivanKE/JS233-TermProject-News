/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
import FeedItemTile from './FeedItemTile.jsx';
export default function NewsFeed(props) {
    //let feedItemTiles = this.feedItems.map(item => <FeedItemTile title={item.title} snippet={item.snippet} image={item.image_url} uuid={item.uuid} />);
    return (
    <div id="news-feed">
        {props.children}
    </div>);
}
