import NewsClient from '../../dev_modules/@ocdla/http2/HttpClient.js';
import NewsFeedApi from './api/NewsFeedApi';
import NewsArticleApi from './api/NewsArticleApi'
import StorageList from './StorageList';
import Favorites from './Favorites';
import NewsFeed from './components/NewsFeed';

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
        let client = new NewsClient();
        let resps = reqs.map((req) => client.send(req));

        // TODO: When we get data from cache it is not being parsed into json. When we get it from the fetch it is.
        Promise.all(resps) // Fails if any promises are not fulfilled. Chain promises is fine.
        .then((responses) => Promise.all(responses.map((resp) => resp.json())))
        .then((feeds) => {
            //this.displayController.populateAllNewsContentArea(feeds[0].data);
            //this.displayController.populateTopStoriescarousel(feeds[1].data);

            let $newsFeed = document.querySelector('#news-feed');

            let data = feeds[0].data; 
            let comp = new NewsFeed(data); 
            let html = comp.render($newsFeed); 
            document.querySelector('#news-feed').innerHTML = html;
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

        /*
        ... feeds => { let data = feeds[0].data; let comp = new NewsFeed(data); let html = comp.render(); 
            document.querySelector('#content').innerHTML = html; } ...
        */
    }

    /*
    TODO LIST

    */
   
    
    async openStory(url, uuid) {
        // Check and see if we have the story, if not, do a fetch
        let story = this.articleStorage.getItem(uuid);
        if (story == null) {
            story = await this.newsArticleApi.getArticle(encodeURIComponent(url));
            this.articleStorage.addItem(uuid, story);
        }

        this.articleModal.showModal(story.data);        
    }

    

    // TODO: Make this code fit my code.
    

}
