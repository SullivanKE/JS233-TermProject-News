/** @jsx vNode */
import { vNode, View } from '@ocdla/view/view';
import NewsClient from '@ocdla/http2/HttpClient';
import NewsFeedApi from './api/NewsFeedApi';
import NewsArticleApi from './api/NewsArticleApi'
import StorageList from './StorageList';
import Favorites from './Favorites';
import NewsFeed from './components/NewsFeed';
import FeedItem from './models/FeedItem';
import Article from './models/Article';


window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;
export default class News {
    constructor() {
        
        this.favoriteStorage = new Favorites({prefix: "Favorite-storage-"});
        this.articleStorage = new StorageList({prefix: "News-Metadata-storage-"});    
        let newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        
        let allNewsUrl = newsFeedApi.getUrl("news/all");
        //let topNewsUrl = newsFeedApi.getUrl("news/top");
        //let headlinesNewsUrl = newsFeedApi.getUrl("news/headlines");

        // We convert our urls to Request objects
        let reqs = [new Request(allNewsUrl.toString())];//, new Request(topNewsUrl.toString())];//, new Request(headlinesNewsUrl.toString())];

        // The client accesses our local storage and does fetchs on the Request objects we just made.
        let client = new NewsClient({config: {refresh: 900}});
        let resps = reqs.map((req) => client.send(req));

        Promise.allSettled(reqs.map((req) => client.send(req)))
        .then((responses) => {
            const fulfilledResponses = responses.filter((resp) => resp.status === "fulfilled");
            const rejectedResponses = responses.filter((resp) => resp.status === "rejected");

            return Promise.all(fulfilledResponses.map((resp) => resp.value.json()));
        })
        .then((feeds) => {
            // This solves the problem of our cache data not being parsed.
            // It's less time consuming and more efficent to just use a try here.
            for (let i = 0; i < feeds.length; i++) {
                try {
                    feeds[i] = JSON.parse(feeds[i]);
                } catch (e) {}
            }

            let $newsFeed = document.querySelector('#news-feed');

            let data = feeds[0].data; 
            let newsSummaries = data.map((summary) => new FeedItem(summary));

            let comp = new NewsFeed(newsSummaries); 
            let newsFeed = View.createRoot($newsFeed);

            newsFeed.render(
                <span>{comp.render($newsFeed)}</span>
            );
            
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    }
   
    
    

}
