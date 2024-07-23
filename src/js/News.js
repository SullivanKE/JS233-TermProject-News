/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode, View } from '@ocdla/view/view';
//import NewsClient from '@ocdla/http2/HttpClient';
import NewsClient from '@ocdla/lib-http/HttpClient';

import LocalStorageCache from '@ocdla/lib-http/caches/LocalStorageCache';
import HttpCache from '@ocdla/lib-http/caches/HttpCache';

import NewsFeedApi from './api/NewsFeedApi';
import NewsArticleApi from './api/NewsArticleApi';
import NewsFeed from './components/NewsFeed';
import FeedItem from './models/FeedItem';
import FeedItemTile from './components/FeedItemTile.jsx';
import Article from './models/Article';

import Modal from './components/Modal.js';
import Carousel from './components/carousel/Carousel.jsx';

import Component from '@ocdla/component/Component';


window.NewsFeedApi = NewsFeedApi;
window.NewsArticleApi = NewsArticleApi;
export default class News extends Component {
    constructor() {
        super();
       
        // We can fetch all the news. Append all news to top stories.
        News.fetchNews()
        .then((feed) => {
            
            let $root = document.querySelector('#root');
            let view = View.createRoot($root);

            let date = new Date();
            view.render(
                <>
                    <h1 class='text-center'>News for {date.toDateString()}</h1>

                    
                    <div class="m-1 p-1 headlines" id="top-stories">
                        <Carousel identifier="headlinesCarousel" className="carousel slide carousel-fade" showControls="true">
                            {feed.map(item => {return {node: item.renderImage(), uuid: item.uuid}})}
                        </Carousel>
                    </div>
                    
                    <NewsFeed>
                        {feed.map(item => <FeedItemTile title={item.title} snippet={item.snippet} image={item.image_url} uuid={item.uuid} />)}
                    </NewsFeed>
                </>

            );

            //this.eventDelegation(newsSummaries.concat(topStories));

            //let $topStories = document.querySelector('#headlinesCarousel-inner');
            let $newsFeed = document.querySelector('#news-feed');
            //this.delegate('click', $topStories, openSummary);
            this.delegate('click', $newsFeed, this.openStory);
            
        });

    }

    static async fetchNews() {
        let api = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        
        let allNewsUrl = api.getUrl("news/all");
        let topNewsUrl = api.getUrl("news/top");
        let headlinesNewsUrl = api.getUrl("news/headlines");

        // , {cache: "force-cache"}
        const header = {
            headers: {
                'Cache-Control': 'public, max-age=900' // Set the maximum age to 15 minutes
            }
        };
        

        let reqs = [topNewsUrl, allNewsUrl, headlinesNewsUrl].map((url) => new Request(url.toString(), header));

        // The client accesses our local storage and does fetchs on the Request objects we just made.

        let client = new NewsClient(
            {
                cacheOptions: {
                    cache: LocalStorageCache,
                    params: {
                        refresh: 15 * 60
                    }
                }
            });

        // let client = new NewsClient(
        //     {
        //         cacheOptions: {
        //             cache: HttpCache
        //         }
        //     });

        return Promise.allSettled(reqs.map((req) => client.send(req)))
        .then((responses) => {
            return responses.filter((resp) => resp.status === "fulfilled");
        })
        .then((responses) => {
            return responses.filter((resp) => resp.value.ok);
        })
        .then((responses) => {
            return Promise.all(responses.map((resp) => resp.value.json()));
        })
        .then((responses) => {
            return responses.filter((resp) => resp.data)
        })
        .then((feeds) => {
            let summaries = [];
            for (let feed of feeds) {
                summaries = summaries.concat(feed.data);
            }            
            return summaries.map((summary) => new FeedItem(summary));
        });
    }

    
    async openStory(itemData) {
        let uuid = itemData.uuid || null;
        if (!uuid) return false;

        let feed = await News.fetchNews();
        if (!feed) return false;

        let item = feed.find((item) => item.uuid === uuid);
        if (!item) return false;

        let url = item.url || null;
        if (!url) return false;

        const header = {
            headers: {
                'Cache-Control': 'public, max-age=900' // Set the maximum age to 15 minutes
            }
        };
        
        let articleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
        let articleApiUrl = articleApi.getUrl(encodeURIComponent(url));

        let req = new Request(articleApiUrl.toString());
        let client = new NewsClient();
        let resp = await client.send(req);
        let data = await resp.json();

        let article = new Article(data.data);
        let articleModal = new Modal();
        let articleContent = article.render();

        articleModal.articleContent(articleContent);
        articleModal.showModal();
    }

}
