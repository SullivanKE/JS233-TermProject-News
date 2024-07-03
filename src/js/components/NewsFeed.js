/** @jsx vNode */
import { vNode } from '@ocdla/view/view';
import Component from './Component';
import Modal from './Modal.js';
import ArticleClient from '@ocdla/http2/HttpClient';
import NewsArticleApi from '../api/NewsArticleApi';
import ArticleModalView from './ArticleModalView';
import FeedItemModalView from './FeedItemModalView';

export default class NewsFeed extends Component {

    constructor(data) {
        super();
        this.$content = document.querySelector('#news-feed');
        this.$noTop = document.querySelector('#nocontent');
        this.$loading = document.querySelector('#loadingcontent');

        // This is taking in the data and doing a parseForecast on it. It's basically making it into an object.
        //
        // this.forecast = new DayForecast(data); 
        // Object.assign(this, ({ city, unitType }));

        this.newsItems = data; // If I am doing things like Trung, I will need to make this its own object class.
    }

    render($newsFeed) {
        // The function I want to fire when the user clicks on a news item
        const openSummary = data => {
           
            if (!data) return false;

            // This is getting the uuid
            const uuid = data.uuid;

            // If there isn't an uuid, we leave
            if (!uuid) return false;

            // Get the summary of the item. We want to open a modal window.
            const article = this.newsItems.find(item => item.uuid === uuid);
            let isFavorited = false; // For now, lets just get this working. We will handle favorites later.

            let summaryContent = FeedItemModalView.toHtml(article, isFavorited);
            let summaryModal = new Modal();
            summaryModal.content(summaryContent);
            summaryModal.showModal();
            //let favoriteBtn = document.querySelector("#favoritebtn");
            //favoriteBtn.onclick = () => this.favoriteStorage.updateFavorites(summary, isFavorited);

            const openStory = async function (url, uuid) {
                let articleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
                let articleApiUrl = articleApi.getUrl(encodeURIComponent(url));

                let req = new Request(articleApiUrl.toString());
                let client = new ArticleClient();
                let resp = await client.send(req);
                let article = await resp.json();

                // This solves the problem of our cache data not being parsed.
                // It's less time consuming and more efficent to just use a try here.
                    try {
                        article = JSON.parse(article);
                    } catch (e) {}
            
                console.log(article);

                let articleModal = new Modal();
                let articleContent = ArticleModalView.toHtml(article.data);
                articleModal.content(articleContent);
                articleModal.showModal();
            }
    
            let readFullArticleButton = document.querySelector("#readFullArticleButton");
            readFullArticleButton.onclick = () => openStory(article.url, article.uuid);
        }   

        let feedItemTiles = this.newsItems.map(item => item.renderTile());
        console.log(feedItemTiles);

        this.delegate('click', $newsFeed, openSummary);

        return feedItemTiles;
    }
}