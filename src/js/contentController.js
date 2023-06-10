import './general';
import { Debug } from './debug';

export class ContentController {
    constructor() {
        this.debugging = true;
        this.prefix = "contentController.js";
        this.debug = new Debug(this.prefix, this.debugging)

        this.$carouselIndicators = document.querySelector('#carouselIndicators');
        this.$carouselInner = document.querySelector('#carouselInner');
        this.$favorites = document.querySelector('#saved');
        this.$categories = document.querySelector('#categories');
        this.$content = document.querySelector('#content');


    }
}