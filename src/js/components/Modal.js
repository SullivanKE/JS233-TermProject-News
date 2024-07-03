import * as bootstrap from 'bootstrap';
export default class Model {
    constructor(modalPrefix) {

        this.isArticleModal = modalPrefix === "article";

        this.$modal = document.querySelector("#" + modalPrefix + "Modal");
        this.$modalHeader = document.querySelector("#" + modalPrefix + "ModalHeader");
        this.$modalBody = document.querySelector("#" + modalPrefix + "ModalBody");
        this.$modalFooter = document.querySelector("#" + modalPrefix + "ModalFooter");
        
        this.$carousel = document.querySelector("#" + modalPrefix + "ModalCarousel");

        this.modal = new bootstrap.Modal(this.$modal);

        this.showModal = this.showModal.bind(this);
    }
    closeModal() {
      this.modal.close();
    }

    showModal() {          
        this.modal.show();
    }

    content(html) {
      const $modalContent = document.querySelector('#modalContent');
      $modalContent.innerHTML = html;
    }
}