import LocalStorageResponse from "./LocalStorageResponse.js";
import LocalStorage from "./LocalStorage.js";
export default class LocalStorageCache {

    static REFRESH_INTERVAL = 900;
    constructor(config) {
        if (config.refresh) 
            LocalStorageCache.REFRESH_INTERVAL = config.refresh;
        
    }

    static put(req, httpResp) {
        let resp = LocalStorageResponse.fromHttpResponse(httpResp);
        let key = this.cyrb53(req.method + req.url);
        resp.then( resp => {
            resp.addHeader("Date", new Date().toUTCString());
            resp.addHeader("Cache-Control", "public, max-age="+LocalStorageCache.REFRESH_INTERVAL);
            
            let localStorage = new LocalStorage({});
            let respToString = resp.toString();
            localStorage.setValue(key, resp.toString());
        });

    }


    static get(req) {
        // Req is the full Request object. We are only interested in the URL at this point as it is the key used in our cache.
        // The method that stores however adds the method to the key. 
        let key = this.cyrb53(req.method + req.url);

        const localStorageParams = {
            defaults: {
                [key]: null
            }
        };

        // We get the value of the key. If there is nothing, we expect to get back null.
        let localStorage = new LocalStorage(localStorageParams);
        let json = localStorage.getValue(key);

        if (json) {
            let cachedResp;
            cachedResp = LocalStorageResponse.fromJson(json);
            return cachedResp.toResponse();
        }
        
        return null;

    }

    static cyrb53(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for(let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
        h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
        h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
        h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    
        return 4294967296 * (2097151 & h2) + (h1 >>> 0);
    }

    
}