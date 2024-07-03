import * as bootstrap from 'bootstrap';
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

    content(html) {
      const $modalContent = document.querySelector('#modalContent');
      $modalContent.innerHTML = html;
    }
}