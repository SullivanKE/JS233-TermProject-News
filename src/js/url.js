export class Url {
    constructor(path, param) {
        this.path = path;
        this.query = param;
    }
    toString() {
        let url = this.path + "?";
        let parts = [];
        for (const [key, value] of Object.entries(this.query)) 
            parts.push([key,value].join('='));
  
        return url + parts.join('&');
    }
}