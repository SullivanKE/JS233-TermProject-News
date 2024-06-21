// Returns the favorites sidebar html

export default class FavoritesComponent {
    constructor() {

        // Config info
        this.titleLength = 30;
        this.descLength = 70;

        // Items dealing with the side bar
        this.$favorites = document.querySelector('#saved');
        this.$categories = document.querySelector('#categories');

    }
    displayFavorites(favorites) {
        let content = "";

        if (favorites.length == 0) {
            // No favorites
            content = "<li>Nothing is saved, try adding something.</li>"
        }
        else {
            for (let i = 0; i < favorites.length; i++) {
                // For each favorites, build a listing
                content += `<li class="mb-3 border rounded">
                                <img class="img-thumbnail" src="${favorites[i].image_url}" /><button class="btn btn-link p-0" name="article" data-uuid="${favorites[i].uuid}">${favorites[i].title.substr(0, this.titleLength)}...</button>
                            </li>`;
            }
        }
        this.$favorites.innerHTML = content;

    }
}