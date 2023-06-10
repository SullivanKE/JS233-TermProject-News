import './general';
import { Debug } from './debug';

export class SaveController {
    constructor() {
        this.debugging = true;
        this.prefix = "saveController.js";
        this.debug = new Debug(this.prefix, this.debugging)


    }
}