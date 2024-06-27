/* TODO:
Add a NewsFeed component that replaces DisplayControllerfor the “allNews” functionality; 
don’t create an instance reference to this new class in News.js - only a local variable reference
so that as your fetch callouts to the news api resolve you will have something like (and give yourself 
a reasonable id for this element like “news-feed” instead of just “content”):

... feeds => { let data = feeds[0].data; let comp = new NewsFeed(data); let html = comp.render(); 
document.querySelector('#content').innerHTML = html; } ...
*/