
import StorageList from './StorageList.js';
export default class Favorites extends StorageList {

    constructor(config) {
        super(config);
        this.favoriteStorage = new StorageList({prefix: "Favorite-storage-"});
    }

    updateFavorites(summary, isFavorited) {
        let favoriteBtn = document.querySelector("#favoritebtn");
        if (isFavorited) {
            this.favoriteStorage.removeItem(summary.uuid);
            favoriteBtn.classList.add("btn-success");
            favoriteBtn.classList.remove("btn-danger");
            favoriteBtn.innerHTML = "Add to Favorites";
        }
        else {
            this.favoriteStorage.addItem(summary.uuid, summary);
            favoriteBtn.classList.add("btn-danger");
            favoriteBtn.classList.remove("btn-success");
            favoriteBtn.innerHTML = "Remove from Favorites";
        }
    }
}