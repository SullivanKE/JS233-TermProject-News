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

    /*render($forecastSummaries, $forecastDetails) {
        const getDays = this.forecast.getDays();
        let summaryHtml = '';

        const displayForecastDetails = data => {
            const index = data.index;

            if (!index) return false;

            $forecastDetails.innerHTML = ForecastDetails(getDays[data.index], this.city, this.unitType);
            $forecastDetails.classList.remove('d-none');
        };

        this.delegate('click', $forecastSummaries, displayForecastDetails);

        for (const [i, day] of getDays.entries()) summaryHtml += this.forecast.getSummary(day, i, this.unitType);

        return $forecastSummaries.innerHTML = summaryHtml;
    };*/

    render($newsFeed) {

        // So this is doing a parse on the forecast and returning a list of days.
        //const getDays = this.forecast.getDays();

        // As a place holder, I am going to make a new variable just copying this.newsItems since it is already an array of news items.
        let newsItems = this.newsItems;

        // This is storing the html we are making
        let summaryHtml = '';

        // The function I want to fire when the user clicks on a news item
        const openSummary = data => {
            // This is getting the uuid
            const uuid = data.uuid;
            console.log(uuid);

            // If there isn't an uuid, we leave
            if (!uuid) return false;

            // Get the summary of the item. We want to open a modal window.
            const summary = newsItems.find(item => item.uuid === uuid);
            let isFavorited = false; // For now, lets just get this working. We will handle favorites later.
               
            summaryModal.showModal(summary, isFavorited);
            //let favoriteBtn = document.querySelector("#favoritebtn");
            //favoriteBtn.onclick = () => this.favoriteStorage.updateFavorites(summary, isFavorited);
    
            let readFullArticleButton = document.querySelector("#readFullArticleButton");
            readFullArticleButton.onclick = () => this.openStory(summary.url, summary.uuid);
        }   

        /*
        const displayForecastDetails = data => {
            // This is getting the index
            const index = data.index;

            // If there isn't an index, we leave
            if (!index) return false;

            // This is changing the innerHTML to the proper details for that day.
            $forecastDetails.innerHTML = ForecastDetails(getDays[data.index], this.city, this.unitType);
            $forecastDetails.classList.remove('d-none');
        };
        */

        // forecastSummaries is the location of the day tiles in the weather application
        // displayForecastDetails is the function being called in this method
        // this.delegate('click', $forecastSummaries, displayForecastDetails);
        this.delegate('click', $newsFeed, openSummary);

        // This is building the summaries of the forecast. I need to make it build my news items then.
        // for (const [i, day] of getDays.entries()) summaryHtml += this.forecast.getSummary(day, i, this.unitType);

        newsItems.forEach(item => summaryHtml += FeedItem(item));

        return $newsFeed.innerHTML = summaryHtml;
    }
}