/** @jsx vNode */
import { vNode, View } from '@ocdla/view/view';
import * as bootstrap from 'bootstrap';
import FeedItem from './FeedItem.jsx';
import Article from './Article.jsx';
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

    render(article) {
      const $modalContent = document.querySelector('#modalContent');
      let root = View.createRoot($modalContent);
      root.render(<Article article={article} />);
    }
}