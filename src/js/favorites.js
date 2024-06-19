import { LocalStorage } from "./LocalStorage";

// Extends local storage to allow favoriting
export class Favorites extends LocalStorage {
    static FAVORITE_PREFIX = "favorite-storage-";

    constructor() {
        super();
        // Optional favorite prefix to use in local storage.
        if (config.favoriteprefix != undefined)
            Favorites.FAVORITE_PREFIX = config.favoriteprefix;

    }

    // Add a favorite. Expects an object with an uuid field
    addFavorite(value) {
        let key = Favorites.FAVORITE_PREFIX + value.uuid;
        this.setValue(key, value);
    }

    // Remove a favorite based on its uuid
    removeFavorite(uuid) {
        let key = Favorites.FAVORITE_PREFIX + uuid;
        localStorage.removeItem(key);

    }

    // TODO: Additional separate work to get the favorites
    findFavorite(uuid) {
        let key = Favorites.FAVORITE_PREFIX + uuid;
        return this.getValue(key);
    }

}