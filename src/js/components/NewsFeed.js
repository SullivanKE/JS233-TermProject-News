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
import Article from './Article';
import Summary from './Summary';
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
            const article = this.newsItems.find(item => item.uuid === uuid);
            let isFavorited = false; // For now, lets just get this working. We will handle favorites later.

            let summaryContent = Summary.toHtml(article, isFavorited);
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
                let articleContent = Article.toHtml(article.data);
                articleModal.content(articleContent);
                articleModal.showModal();
            }
    
            let readFullArticleButton = document.querySelector("#readFullArticleButton");
            readFullArticleButton.onclick = () => openStory(article.url, article.uuid);
        }   

        let items = this.newsItems.map(item => FeedItem(item));
        $newsFeed.innerHTML = items.join('\n');

        this.delegate('click', $newsFeed, openSummary);
    }
}