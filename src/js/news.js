import './general';
import { ApiController } from './apiController';
import { ArticleModal } from './articleModal';
import { SummaryModal } from './summaryModal';
import { Debug } from './debug';
import {SaveController} from './saveController';
import {ContentController} from './contentController';


class News {
    constructor() {
        this.debugging = true;
        this.prefix = "news.js";
        this.debug = new Debug(this.prefix, this.debugging);

        this.articleModal = new ArticleModal();
        this.summaryModal = new SummaryModal();
        this.contentController = new ContentController();
        this.saveController = new SaveController();
        this.apiController = new ApiController();

        this.debug.debug("Modal Header", document.querySelector("#modalHeader"));

        //this.apiTest();
        //this.openStory("");
        this.openSummary("");

        // TODO: Category filtering
        // TODO: Search function
        // TODO: Populating top story carousel
        // TODO: Populating content area
        // TODO: Saving to and deleting from favorites

    }
    async openStory(url) {
        /*story = {
            "publish_date": "2023-06-09 02:42:02-04:00",
            "source_url": "https://www.benzinga.com",
            "url": "https://www.benzinga.com/news/earnings/23/06/32791363/markets-turn-bullish-after-dow-rises-for-third-straight-session",
            "canonical_link": "https://www.benzinga.com/news/earnings/23/06/32791363/markets-turn-bullish-after-dow-rises-for-third-straight-session",
            "title": "Markets Turn Bullish After Dow Rises For Third Straight Session - NIO (NYSE:NIO), Carvana (NYSE:CVNA)",
            "top_image": "https://cdn.benzinga.com/files/images/story/2023/06/09/stock_market_up_-_logo.jpg?width=1200&height=800&fit=crop",
            "images": [
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCA4NS4zMzFoNTEydjM0MS4zMzdIMHoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMCA4NS4zMzFoMTcwLjY2M3YzNDEuMzM3SDB6Ii8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTM0MS4zMzcgODUuMzMxSDUxMnYzNDEuMzM3SDM0MS4zMzd6Ii8+PC9zdmc+",
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTMgMzQyIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCAwaDUxM3YzNDJIMHoiLz48cGF0aCBkPSJNMCAwaDUxM3YzOEgwem0wIDc2aDUxM3YzOEgwem0wIDc2aDUxM3YzOEgwem0wIDc2aDUxM3YzOEgwem0wIDc2aDUxM3YzOEgweiIgZmlsbD0iI0Q4MDAyNyIvPjxwYXRoIGZpbGw9IiMyRTUyQjIiIGQ9Ik0wIDBoMjU2LjV2MTkwSDB6Ii8+PHBhdGggZD0iTTQ3LjggMTQxLjlsLTQtMTIuOC00LjMgMTIuOEgyNi4zbDEwLjcgNy43LTQgMTIuOCAxMC44LTcuOSAxMC43IDcuOS00LjItMTIuOCAxMC45LTcuN3ptNTYuNCAwbC00LjEtMTIuOC00LjIgMTIuOEg4Mi43bDEwLjcgNy43LTQuMSAxMi44IDEwLjgtNy45IDEwLjcgNy45LTQtMTIuOCAxMC44LTcuN3ptNTYuNCAwbC00LjItMTIuOC00IDEyLjhoLTEzLjVsMTAuOSA3LjctNC4yIDEyLjggMTAuOC03LjkgMTAuOSA3LjktNC4yLTEyLjggMTAuOC03Ljd6bTU2LjMgMGwtNC4xLTEyLjgtNC4yIDEyLjhoLTEzLjJsMTAuNyA3LjctNCAxMi44IDEwLjctNy45IDEwLjggNy45LTQuMi0xMi44IDEwLjktNy43ek0xMDAuMSA3OC4zbC00LjIgMTIuOEg4Mi43TDkzLjQgOTlsLTQuMSAxMi42IDEwLjgtNy44IDEwLjcgNy44LTQtMTIuNiAxMC44LTcuOWgtMTMuNHptLTU2LjMgMGwtNC4zIDEyLjhIMjYuM0wzNyA5OWwtNCAxMi42IDEwLjgtNy44IDEwLjcgNy44TDUwLjMgOTlsMTAuOS03LjlINDcuOHptMTEyLjYgMGwtNCAxMi44aC0xMy41bDEwLjkgNy45LTQuMiAxMi42IDEwLjgtNy44IDEwLjkgNy44LTQuMi0xMi42IDEwLjgtNy45aC0xMy4zem01Ni40IDBsLTQuMiAxMi44aC0xMy4ybDEwLjcgNy45LTQgMTIuNiAxMC43LTcuOCAxMC44IDcuOC00LjItMTIuNiAxMC45LTcuOWgtMTMuNHptLTE2OS01MC42bC00LjMgMTIuNkgyNi4zTDM3IDQ4LjJsLTQgMTIuN0w0My44IDUzbDEwLjcgNy45LTQuMi0xMi43IDEwLjktNy45SDQ3Ljh6bTU2LjMgMGwtNC4yIDEyLjZIODIuN2wxMC43IDcuOS00LjEgMTIuNyAxMC44LTcuOSAxMC43IDcuOS00LTEyLjcgMTAuOC03LjloLTEzLjR6bTU2LjMgMGwtNCAxMi42aC0xMy41bDEwLjkgNy45LTQuMiAxMi43IDEwLjgtNy45IDEwLjkgNy45LTQuMi0xMi43IDEwLjgtNy45aC0xMy4zem01Ni40IDBsLTQuMiAxMi42aC0xMy4ybDEwLjcgNy45LTQgMTIuNyAxMC43LTcuOSAxMC44IDcuOS00LjItMTIuNyAxMC45LTcuOWgtMTMuNHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=",
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNMCA4NS4zMzFoNTEydjM0MS4zMzdIMHoiLz48cGF0aCBkPSJNMCA4NS4zMzFoNTEydjExMy43NzVIMHptMCAyMjcuNTUxaDUxMnYxMTMuNzc1SDB6IiBmaWxsPSIjRDgwMDI3Ii8+PC9zdmc+",
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMCA4NS4zMzdoNTEydjM0MS4zMjZIMHoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMCA4NS4zMzdoNTEydjExMy43NzVIMHoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMCAzMTIuODg4aDUxMnYxMTMuNzc1SDB6Ii8+PGNpcmNsZSBmaWxsPSIjMDA1MkI0IiBjeD0iMjU2IiBjeT0iMjU2IiByPSI0My44OTYiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI3LjQzNCIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0yNTYgMjIyLjE0Nmw4LjQ2NCAxOS4xOTUgMjAuODU1LTIuMjY4TDI3Mi45MjcgMjU2bDEyLjM5MiAxNi45MjctMjAuODU1LTIuMjY4TDI1NiAyODkuODU0bC04LjQ2NC0xOS4xOTUtMjAuODU1IDIuMjY4TDIzOS4wNzMgMjU2bC0xMi4zOTItMTYuOTI3IDIwLjg1NSAyLjI2OHoiLz48L3N2Zz4=",
                "https://cdn.benzinga.com/files/images/story/2023/06/09/stock_market_up_-_logo.jpg?width=1200&height=800&fit=crop",
                "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgODUuMzMzIDUxMiAzNDEuMzMzIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNMzQxLjMzNCA4NS4zM0gwdjM0MS4zMzJoNTEyVjg1LjMzeiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0wIDg1LjMzM2gxNzAuNjYzVjQyNi42N0gweiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0zNDEuMzM3IDg1LjMzM0g1MTJWNDI2LjY3SDM0MS4zMzd6Ii8+PC9zdmc+"
            ],
            "videos": [],
            "text": "The CNN Money Fear and Greed index showed an improvement in overall sentiment among U.S. investors on Thursday.\n\nU.S. stocks closed higher on Thursday following the release of initial jobless claims data, which rose to 261,000 in the week ended June 3, the highest level since Oct. 2021, and above market estimates of 235,000.\n\nShares of Carvana Co. CVNA jumped 56% on Thursday after the company announced an improved second quarter 2023 outlook with profits expected over $50 million.\n\nThe Dow Jones closed higher by around 169 points to 33,833.61 on Thursday, notching gains for the third straight session. The S&P 500 rose 0.62% at 4,293.93, while the Nasdaq Composite added 1.02% to settle at 13,238.52 during the session.\n\nInvestors are awaiting earnings results from NIO Inc. NIO, and Renalytix Plc RNLX today.\n\nAt a current reading of 76.0, the index remained in the \"Extreme Greed\" zone, versus a previous reading of 75.0\n\nWhat is CNN Business Fear & Greed Index?\n\nThe Fear & Greed Index is a measure of the current market sentiment. It is based on the premise that higher fear exerts pressure on stock prices, while higher greed has the opposite effect. The index is calculated based on seven equal-weighted indicators. The index ranges from 0 to 100, where 0 represents maximum fear and 100 signals maximum greediness.\n\nRead Next: Top 5 Tech Stocks That You May Want To Dump In Q2",
            "tags": [
                "Penny Stocks",
                "Politics",
                "Digital Securities",
                "CNN Business Fear & Greed Index",
                "Regulations",
                "Healthcare",
                "Volatility",
                "Freight",
                "Government"
            ],
            "authors": [
                "Lisa Levin",
                "Benzinga Editor"
            ],
            "meta_image": "https://cdn.benzinga.com/files/images/story/2023/06/09/stock_market_up_-_logo.jpg?width=1200&height=800&fit=crop",
            "meta_description": "The CNN Money Fear and Greed index showed an improvement in overall sentiment among U.S. investors on Thursday. U.S. stocks closed higher on Thursday following the release of initial jobless claims data, which rose to 261,000 in the week ended June 3, the highest level since Oct. 2021, and above market estimates of 235,000.",
            "meta_keywords": [
                ""
            ],
            "meta_lang": "en",
            "meta_favicon": "/next-assets/images/safari-pinned-tab.svg",
            "meta_site_name": "Benzinga",
            "meta_data": [
                "viewport",
                "copyright",
                "description",
                "author",
                "msapplication-TileColor",
                "theme-color",
                "fb",
                "syndication-source",
                "twitter",
                "og",
                "Benzinga for iOS",
                "apple-mobile-web-app-capable",
                "apple-mobile-web-app-status-bar-style",
                "robots",
                "msvalidate.01",
                "y_key",
                "fo-verify",
                "language",
                "next-head-count"
            ],
            "html": null
        }*/
        this.debug.debug("openStory call", url);

        this.apiController.fetchArticle(url).then(story => {
            this.debug.debug("openStory call inside promise", story);
            this.articleModal.showModal(story.data);
        })
    }
    openSummary(summary) {
        summary = {"uuid": "fe01d54c-42b2-42a9-be2c-f820ede296fe",
        "title": "Jays' Anthony Bass says anti-LGBTQIA+ post he shared wasn't hateful",
        "description": "Blue Jays pitcher Anthony Bass said Thursday that he didn't believe the post he shared, which described the sale of LGBTQIA+ merchandise as",
        "keywords": "",
        "snippet": "TORONTO -- Toronto Blue Jays pitcher Anthony Bass said Thursday he doesn't believe an anti-LGBTQIA+ social media post he shared last month was hateful.\n\nThe rig...",
        "url": "https://www.espn.com/mlb/story/_/id/37823206/jays-anthony-bass-says-anti-lgbtq+-post-shared-hateful",
        "image_url": "https://a4.espncdn.com/combiner/i?img=/photo/2023/0609/r1184409_1296x729_16-9.jpg",
        "language": "en",
        "published_at": "2023-06-09T05:24:23.000000Z",
        "source": "espn.com",
        "categories": [
            "sports",
            "general"
        ],
        "relevance_score": null,
        "locale": "us"};

        this.summaryModal.showModal(summary);
        this.addSummaryEventHandlers(summary.url);

    }
    addSummaryEventHandlers(url) {
        document.querySelector('#readFullArticleButton').onclick = this.openStory.bind(this, url);
        // Favorite button will go here too
    }
    
    apiTest() {
        let exampleUUID = "20cd4fa6-5ef4-49b2-978a-12242a15a538";


        // Headlines is part of the paid API plan
        //this.apiController.getHeadlines();
        
        //this.apiController.topStories();
        //this.apiController.allNews();
        //this.apiController.similarNews(exampleUUID);
        this.apiController.newsByUUID(exampleUUID).then(data => {
            debug(this.prefix, "Article loaded", data, this.debugging);
            fetchArticle(data.url).then(article => {
                this.debug(this.prefix, "Article data", article);
            })
        });
    }

    addEventHandlers() {
        // This will open up the modal window that does not contain the article. A view article button could be on it to openStory(). I think adding and removing from favorites would go well here.
    }

}
let news;
window.onload = () => {
    news = new News();
}