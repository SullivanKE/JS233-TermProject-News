export class Url {
    static CONFIG = {
        language: "en",
        locale: "us"
    }

    constructor(config) {
        if (config.language !== undefined)
            Url.CONFIG.language = config.language;
        if (config.locale !== undefined)
            Url.CONFIG.locale = config.locale;

        this.urlParams;
    }

    setURLParameters(param) {
        this.urlParams = param;
    }

    toString() {
        let url = `${SERVER_URL}${this.urlParams.key}?locale=${Url.CONFIG.locale}&language=${Url.CONFIG.language}&api_token=${API_TOKEN}`;
        for (const [key, value] of Object.entries(this.urlParams)) 
            url += `&${key}=${value}`;
        return url;
    }
}