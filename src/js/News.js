/** @jsx vNode */
/** @jsxFrag "Fragment" */
import { vNode, View } from '@ocdla/view/view';
import NewsClient from '@ocdla/http2/HttpClient';
import NewsFeedApi from './api/NewsFeedApi';
import NewsArticleApi from './api/NewsArticleApi'
import StorageList from './StorageList';
import Favorites from './Favorites';
import NewsFeed from './components/NewsFeed';
import FeedItem from './models/FeedItem';
import FeedItemTile from './components/FeedItemTile.jsx';
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
       
        // We can fetch all the news. Append all news to top stories.
        this.fetchNews()
        .then((feed) => {
            
            let $root = document.querySelector('#root');
            let view = View.createRoot($root);
            // newsFeed.render(
            //     <div>
            //         <TopStories feedItems={topStories}/>
                    
            //         <div class="row m-2">
            //             <div class="col-2">
            //                     <div class="border border-light m-2 columnStyle h-100">
            //                     <h4 class="text-center">Favorites</h4>
            //                     <ul id="saved" style="list-style-type: none;" class="p-1 text-start">
            //                     </ul>
            //                 </div>
            //             </div>
            //             <NewsFeed feedItems={newsSummaries} />
            //         </div>
            //     </div>
            // );

            // newsFeed.render(
            //     <div>
                    
            //         <div class="row m-2">

            //             <NewsFeed feedItems={newsSummaries} />
            //         </div>
            //     </div>
            // );
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

            this.openStory = this.openStory.bind(this);
            this.fetchNews = this.fetchNews.bind(this);
            
        });

    }

    async fetchNews() {
        let api = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        
        let allNewsUrl = api.getUrl("news/all");
        let topNewsUrl = api.getUrl("news/top");
        let headlinesNewsUrl = api.getUrl("news/headlines");

        // , {cache: "force-cache"}

        let reqs = [topNewsUrl, allNewsUrl, headlinesNewsUrl].map((url) => new Request(url.toString(), {cache: "force-cache"}));

        // The client accesses our local storage and does fetchs on the Request objects we just made.
        let client = new NewsClient({config: {debug: true, caching: false, refresh: 900}});

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
        .then((feeds) => {
            let summaries = [];
            for (let feed of feeds) {
                summaries = summaries.concat(feed.data);
            }            
            return summaries.map((summary) => new FeedItem(summary));
        });
    }

    
    async openStory(uuid) {

        let feed = await this.fetchNews();
        if (!feed) return false;

        let url = feed.find((item) => item.uuid === uuid).url;
        if (!url) return false;

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
