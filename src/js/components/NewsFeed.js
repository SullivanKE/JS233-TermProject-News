/* TODO:
Add a NewsFeed component that replaces DisplayControllerfor the “allNews” functionality; 
don’t create an instance reference to this new class in News.js - only a local variable reference
so that as your fetch callouts to the news api resolve you will have something like (and give yourself 
a reasonable id for this element like “news-feed” instead of just “content”):

... feeds => { let data = feeds[0].data; let comp = new NewsFeed(data); let html = comp.render(); 
document.querySelector('#content').innerHTML = html; } ...
*/
import Component from './Component';
import FeedItem from './FeedItem';
import Modal from './Modal.js';
import ArticleClient from '@ocdla/http2/HttpClient.js';
import NewsArticleApi from '../api/NewsArticleApi';
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

        // As a place holder, I am going to make a new variable just copying this.newsItems since it is already an array of news items.
        let newsItems = this.newsItems;

        // This is storing the html we are making
        let summaryHtml = '';

        // The function I want to fire when the user clicks on a news item
        const openSummary = data => {
           
            if (!data) return false;

            // This is getting the uuid
            const uuid = data.uuid;

            // If there isn't an uuid, we leave
            if (!uuid) return false;

            // Get the summary of the item. We want to open a modal window.
            const summary = newsItems.find(item => item.uuid === uuid);
            let isFavorited = false; // For now, lets just get this working. We will handle favorites later.
               
            let summaryModal = new Modal('summary');
            summaryModal.showModal(summary, isFavorited);
            //let favoriteBtn = document.querySelector("#favoritebtn");
            //favoriteBtn.onclick = () => this.favoriteStorage.updateFavorites(summary, isFavorited);

            const openStory = function (url, uuid) {
                let articleApi = new NewsArticleApi(NEWS_ARTICLE_API_TOKEN);
                let articleApiUrl = articleApi.getUrl(encodeURIComponent(url));
                let req = new Request(articleApiUrl.toString());
                let client = new ArticleClient();
                let resp = client.send(req);
                resp.then(resp => {
                    let article = resp.json();
                    article = article.data;
                    let articleModal = new Modal('article');
                    articleModal.showModal(article);
                })
                .catch(err => console.error(err));
            }
    
            let readFullArticleButton = document.querySelector("#readFullArticleButton");
            readFullArticleButton.onclick = () => openStory(summary.url, summary.uuid);
        }   

        let items = newsItems.map(item => FeedItem(item));
        $newsFeed.innerHTML = items.join('\n');

        this.delegate('click', $newsFeed, openSummary);
    }
}