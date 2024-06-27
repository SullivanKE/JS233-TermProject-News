import LocalStorageCache from "../local-storage-cache/LocalStorageCache";
import Header from "./Header";
export default class HttpClient {

    send(req) {


        // Req is sent in as the full request object. We need to check if it is saved in the cache.
        // get returns either a response or null.
        let entry = LocalStorageCache.get(req);

        
        // In my implementation, I needed to modify LocalStorageCache.get() in the instance of no cache found.
        // When we don't even have a cache, we should make a request.
        // Since we need to check the request time first, we check if it's not null. If our returnPromise.resolve(entry) doesn't return
        // Then we drop out of our if statement and fetch anyways.
        let stale = true;
        if (entry) {

            let cachedDate = new Date(entry.headers.get("Date"));
            let cachedTime = cachedDate.getTime() / 1000;

            let now = new Date();
            let nowTime = now.getTime() / 1000;

            let cacheControl = new Header(entry.headers.get("Cache-Control"));
            let maxAge = cacheControl.get("max-age");

            stale = (nowTime - cachedTime) > maxAge;
        }
        
         return entry && !stale ?   
            Promise.resolve(entry) : 
            fetch(req).then( resp => {
                LocalStorageCache.put(req, resp.clone());                            
                return resp;
            });
        

    }


}