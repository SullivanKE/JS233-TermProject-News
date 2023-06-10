import './general';
import { debug, error} from './debug';

export class ContentController {
    constructor() {
        this.debugging = true;
        this.prefix = "contentController.js";

        this.$carouselIndicators = document.querySelector('#carouselIndicators');
        this.$carouselInner = document.querySelector('#carouselInner');
        this.$favorites = document.querySelector('#saved');
        this.$categories = document.querySelector('#categories');
        this.$content = document.querySelector('#content');


    }
}