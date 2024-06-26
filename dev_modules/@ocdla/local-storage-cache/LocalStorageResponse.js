export default class LocalStorageResponse {

    headers = {};

    body = null;

    constructor(body, headers) {
        this.body = body;
        this.headers = headers || this.headers;
    }

    addHeader(k, v) {
        this.headers[k] = v;
    }

    getHeaders() {
        return this.headers;
    }

    getBody() {
        return this.body;
    }


    toString() {
        return JSON.stringify(this);
    }

    /*
     Convert this object to a standard JavaScript Response object.
    */
    toResponse() {
        return Response.json(this.body, {headers: this.headers});
    }

    // Convert stored JSON in the format '{"headers":{"h1":"h1","h2":"h2","h3":"h3"},"body":"{"prop1":"val1"}"}'.
    static fromJson(cacheJson) {

        const {headers,body} = JSON.parse(cacheJson);

        return new LocalStorageResponse(body,headers);
    }

    // Convert an instance JavaScript Response to an instance of this class.
    static fromHttpResponse(httpResp) {


        let date, cacheControl, xCache;

        date = new Date(httpResp.headers.get("Date")).toUTCString();
        cacheControl = "public, max-age="+LocalStorageResponse.ttl;
        xCache = "local-storage-cache";

        let headers = new Headers(httpResp.headers);

        headers.append("Date", date);
        headers.append("Cache-Control", cacheControl);
        headers.append("X-Cache", xCache);

        let body;
        if (httpResp.body) {
            body = httpResp.text(); // If we don't await here the body will be saved as empty, but this is causing problems in news.js.
        }

        return new LocalStorageResponse(body, headers);
    }
}