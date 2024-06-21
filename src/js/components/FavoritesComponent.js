// Returns the favorites sidebar html

export default class FavoritesComponent {
    constructor() {

    }
    displayFavorites(favorites) {
        let content = "";

        this.debug.debug("Display favorites passed through", favorites);

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