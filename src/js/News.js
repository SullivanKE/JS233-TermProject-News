/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode, View } from '@ocdla/view/view';
import NewsClient from '@ocdla/http2/HttpClient';
import NewsFeedApi from './api/NewsFeedApi';
import NewsArticleApi from './api/NewsArticleApi'
import StorageList from './StorageList';
import Favorites from './Favorites';
import NewsFeed from './components/NewsFeed';
import TopStories from './components/TopStories';
import FeedItem from './models/FeedItem';
import Article from './models/Article';

import Modal from './components/Modal.js';
import ArticleV from './components/Article.jsx';
import FeedItemV from './components/FeedItem.jsx';
import Carousel from './components/carousel/Carousel.jsx';

import Component from '@ocdla/component/Component';


window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;
export default class News extends Component {
    constructor() {
        super();
        //this.favoriteStorage = new Favorites({prefix: "Favorite-storage-"});
        //this.articleStorage = new StorageList({prefix: "News-Metadata-storage-"});    
        let newsFeedApi = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        
        let allNewsUrl = newsFeedApi.getUrl("news/all");
        let topNewsUrl = newsFeedApi.getUrl("news/top");
        //let headlinesNewsUrl = newsFeedApi.getUrl("news/headlines");

        // We convert our urls to Request objects
        let reqs = [new Request(allNewsUrl.toString()), new Request(topNewsUrl.toString())];//, new Request(headlinesNewsUrl.toString())];

        // The client accesses our local storage and does fetchs on the Request objects we just made.
        let client = new NewsClient({config: {refresh: 900}});
        let resps = reqs.map((req) => client.send(req));

        Promise.allSettled(reqs.map((req) => client.send(req)))
        .then((responses) => {
            const fulfilledResponses = responses.filter((resp) => resp.status === "fulfilled");
            // const rejectedResponses = responses.filter((resp) => resp.status === "rejected");

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

            let $root = document.querySelector('#root');

            let newsSummaries = feeds[0].data.map((summary) => new FeedItem(summary));
            let topStories = feeds[1].data.map((summary) => new FeedItem(summary));
            //let favorites = this.favoriteStorage.get();
            let newsFeed = View.createRoot($root);
            newsFeed.render(
                <div data-index="this is a test">
                    <TopStories feedItems={topStories}/>
                    
                    <div class="row m-2">
                        <div class="col-2">
                                <div class="border border-light m-2 columnStyle h-100">
                                <h4 class="text-center">Favorites</h4>
                                <ul id="saved" style="list-style-type: none;" class="p-1 text-start">
                                </ul>
                            </div>
                        </div>
                        <NewsFeed feedItems={newsSummaries} />
                    </div>
                </div>
            );

            this.eventDelegation(newsSummaries.concat(topStories));
            
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    }
   //TODO list
    // sw.jx file to index
    // Make favorites work
        // Will make favorites work after getting service workers added.

    eventDelegation(feedItems) {
        
        // The function I want to fire when the user clicks on a news item
        const openSummary = data => {   
            (data);        
            if (!data) return false;

            // This is getting the uuid
            const uuid = data.uuid;

            // If there isn't an uuid, we leave
            if (!uuid) return false;

            // Get the summary of the item. We want to open a modal window.
            const feedItem = feedItems.find(item => item.uuid === uuid);
            let isFavorited = false; // For now, lets just get this working. We will handle favorites later.

            let summaryModal = new Modal();
            summaryModal.summaryContent(feedItem);
            summaryModal.showModal();


            //let favoriteBtn = document.querySelector("#favoritebtn");
            //favoriteBtn.onclick = () => this.favoriteStorage.updateFavorites(summary, isFavorited);

            const openStory = async function (url, uuid) {
                let articleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
                let articleApiUrl = articleApi.getUrl(encodeURIComponent(url));

                let req = new Request(articleApiUrl.toString());
                let client = new NewsClient();
                let resp = await client.send(req);
                let data = await resp.json();

                // This solves the problem of our cache data not being parsed.
                // It's less time consuming and more efficent to just use a try here.
                    try {
                        data = JSON.parse(data);
                    } catch (e) {}
            

                let article = new Article(data.data);
                let articleModal = new Modal();
                let articleContent = article.render();

                articleModal.articleContent(articleContent);
                articleModal.showModal();
            }
    
            let readFullArticleButton = document.querySelector("#readFullArticleButton");
            readFullArticleButton.onclick = () => openStory(feedItem.url, feedItem.uuid);
        }   

        

        let $topStories = document.querySelector('#headlinesCarousel-inner');
        let $newsFeed = document.querySelector('#news-feed');
        this.delegate('click', $topStories, openSummary);
        this.delegate('click', $newsFeed, openSummary);
    }
    

}
