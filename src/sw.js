


// Location of this URI for this file.
const workerUri = "./sw.js";

// The worker can control all pages within this scope, i.e., in the current directory and all its subdirectories.
const workerScope = "./";

const cacheName = "v1";

// Register the service worker with the browser and listen for evenets.
registerServiceWorker();



self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/styles.css',
        '/js/app.js'
      ]);
    })
  );
});






async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(workerUri, {
        scope: workerScope,
      });
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
}


// Sample code from Google.
// Intercept requests and respond with a cached copy; otherwise perform the fetch and place the response in the cache.
self.addEventListener('fetch', (event) => {
  console.log('Service Worker: Fetching', event.request.url);

  event.respondWith(
    caches.open(cacheName)
      .then(cache => {
        return cache.match(event.request)
          .then(response => {
            if (response) {
              console.log('Cache hit:', event.request.url);
              return response;
            }

            console.log('Cache miss. Fetching from network:', event.request.url);
            return fetch(event.request)
              .then(networkResponse => {
                console.log('Fetched from network:', event.request.url);
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
          });
      })
  );
});