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
        resp.then( resp => {
            resp.addHeader("Date", new Date().toUTCString());
            resp.addHeader("Cache-Control", "public, max-age="+LocalStorageCache.REFRESH_INTERVAL);
            let key = req.method + httpResp.url;
            let localStorage = new LocalStorage({});
            localStorage.setValue(key, resp.toString());
        });

    }


    static get(req) {
        // Req is the full Request object. We are only interested in the URL at this point as it is the key used in our cache.
        // The method that stores however adds the method to the key. 
        let key = req.method + req.url;

        const localStorageParams = {
            defaults: {
                [key]: null
            }
        };

        // We get the value of the key. If there is nothing, we expect to get back null.
        let localStorage = new LocalStorage(localStorageParams);
        let json = localStorage.getValue(key);

        let cachedResp;
        if (json === null)  // If we didn't get anything back, we return null.
            return null;
        else                // If we got something back, we convert it to a LocalStorageResponse object and return it.
            cachedResp = LocalStorageResponse.fromJson(json);

        return cachedResp.toResponse();
    }

    
}