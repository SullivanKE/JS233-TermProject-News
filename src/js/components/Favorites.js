// Returns the favorites sidebar html

export default class FavoritesComponent {

    #maximumTitleLength = 30;
    
    buildFavoriteItems(favorites) {
        return favorites.map(favorite => {
            const { image_url, uuid, title } = favorite;
            const trimmedTitle = title.substr(0, this.#maximumTitleLength) + '...';

            return `
                <li class="mb-3 border rounded">
                    <img class="img-thumbnail" src="${image_url}" />
                    <button class="btn btn-link p-0" name="article" data-uuid="${uuid}">
                        ${trimmedTitle}
                    </button>
                </li>
            `;
        }).join('');
    }
    buildFavorites(favorites) {

        if (favorites.length == 0) {
            // No favorites
            return "<li>Nothing is saved, try adding something.</li>"
        }
        else {
            return this.buildFavoriteItems(favorites);
        }
    }
}