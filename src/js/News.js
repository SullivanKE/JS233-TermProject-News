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
        let api = new NewsFeedApi(NEWS_FEED_API_TOKEN);
        
        let allNewsUrl = api.getUrl("news/all");
        let topNewsUrl = api.getUrl("news/top");
        let headlinesNewsUrl = api.getUrl("news/headlines");

        // , {cache: "force-cache"}

        let reqs = [topNewsUrl, allNewsUrl, headlinesNewsUrl].map((url) => new Request(url.toString(), {cache: "force-cache"}));

        // The client accesses our local storage and does fetchs on the Request objects we just made.
        let client = new NewsClient({config: {debug: true, caching: false, refresh: 900}});

        Promise.allSettled(reqs.map((req) => client.send(req)))
        .then((responses) => {
            return responses.filter((resp) => resp.status === "fulfilled");
        })
        .then((responses) => {
            return responses.filter((resp) => resp.value.ok);
        })
        .then((responses) => {
            return Promise.all(responses.map((resp) => resp.value.json()));
        })
        // We can fetch all the news. Append all news to top stories.
        .then((feeds) => {
            
            let $root = document.querySelector('#root');
            let summaries = [];
            for (let feed of feeds) {
                summaries = summaries.concat(feed.data);
            }            
            let items = summaries.map((summary) => new FeedItem(summary));
            

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
                            {items.map(item => {return {node: item.renderImage(), uuid: item.uuid}})}
                        </Carousel>
                    </div>
                    
                    <NewsFeed>
                        {items.map(item => <FeedItemTile title={item.title} snippet={item.snippet} image={item.image_url} uuid={item.uuid} />)}
                    </NewsFeed>
                </>

            );

            //this.eventDelegation(newsSummaries.concat(topStories));
            
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
            

                let article = new Article(data.data);
                let articleModal = new Modal();
                let articleContent = article.render();

                articleModal.articleContent(articleContent);
                articleModal.showModal();
            }
    
            let readFullArticleButton = document.querySelector("#readFullArticleButton");
            readFullArticleButton.onclick = () => openStory(feedItem.url, feedItem.uuid);
        }   

        

        //let $topStories = document.querySelector('#headlinesCarousel-inner');
        let $newsFeed = document.querySelector('#news-feed');
        //this.delegate('click', $topStories, openSummary);
        this.delegate('click', $newsFeed, openSummary);
    }
    

}
