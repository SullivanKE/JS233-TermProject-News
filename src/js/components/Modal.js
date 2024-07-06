/** @jsx vNode */
import { vNode, View } from '@ocdla/view/view';
import * as bootstrap from 'bootstrap';
import FeedItem from './FeedItem.jsx';
export default class Model {
    constructor() {
      this.$modal = document.querySelector('#modal');
      this.modal = new bootstrap.Modal(this.$modal);
      
    }
    closeModal() {
      this.modal.close();
    }

    showModal() {          
    }

    showModal() {          
        this.modal.show();
    }

    content(summary) {
      const $modalContent = document.querySelector('#modalContent');
      let root = View.createRoot($modalContent);
      root.render(<FeedItem summary={summary} />);
    }
}