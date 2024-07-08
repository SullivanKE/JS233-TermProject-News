To get started, add a .env file in your root folder (one level above src). This file should be formatted as follows for development

## .env
```
NODE_ENV=dev
NEWS_FEED_API_TOKEN='newsapi.org api token'
NEWS_ARTICLE_API_TOKEN='articlextractor.com api token'
```

## You can get your API keys for free at the following websites:
https://newsapi.org/ (Free version is 100 calls. This application makes two calls every 15 minutes on user reload)
https://www.articlextractor.com/ (Free version is 25 calls. This application makes one call every time the user opens a full article with 'read more'.)

After installing all packages using `npm install`, in a terminal in VS code use `npm run watch` to launch the application.
