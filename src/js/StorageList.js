// Class for storing a list of items
export class StorageList {
    static LIST_PREFIX = "list-storage-";

    constructor(config) {
        // Optional prefix to use in local storage
        if (config.prefix != undefined)
            StorageList.LIST_PREFIX = config.prefix;
    }

    // Add an item to our list
    addItem(value, id) {
        let key = StorageList.LIST_PREFIX + id; // Add our list prefix to the key value
        this.setValue(key, value);
    }

    // Remove an item based on its id
    removeItem(id) { localStorage.removeItem(StorageList.LIST_PREFIX + id); }

    // Return a single individual item
    getItem(id) { return this.getValue(StorageList.LIST_PREFIX + id); }

    // Return array of all items
    getAllItems() {
        let keys =  Object.keys(localStorage)
                    .filter(key => key.includes(StorageList.LIST_PREFIX)); // Get all keys that contain our prefix
        
        return keys.map(this.getItem);
    }

}