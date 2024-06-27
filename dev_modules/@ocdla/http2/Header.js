/* TODO
Add a Header class to to your http2 package with a constructor(name,value) that performs the work currently in send() 
for retrieving the value of a HTTP header; or in the case of a header like Cache-Control can return a multi-value header 
as an object from which you can retrieve a specific value (i.e., max-age).
*/

export default class Header {
    constructor(value) {
        let parts = value.split(",").map(value => value.trim());

        let partsObject = {};
        let partsFlags = new Array();
        for(var value of parts) {
            let [k,v] = value.split("=");
            if (v)
                partsObject[k] = v;
            else
                partsFlags.push(k);
        }
        partsObject["flags"] = partsFlags;
        this.value = partsObject;
    }
    get(key) {
        return this.value[key];
    }
    
    
    
    
    /*#header = {};
    constructor(header) {
        if (header)
            header.forEach((value, key) => this.add(key, value));
    }

    add(key, value) {
        console.log(key, value);
        let parts = value.split(",").map(value => value.trim());

        let partsObject = {};
        let partsFlags = new Array();

        for(var value of parts) {
            let [k,v] = value.split("=");
            if (v)
                partsObject[k] = v;
            else
                partsFlags.push(k);
        }
        partsObject["flags"] = partsFlags;
        this.#header[key] = partsObject;
    }

    get(key) {
        return this.#header[key];
    }

    getAll() {
        return this.#header;
    }*/
}