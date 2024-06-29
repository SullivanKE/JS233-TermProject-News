// Class for storing a list of items
export default class StorageList {
    constructor(config) {
        this.listPrefix = "list-storage-";
        // Optional prefix to use in local storage
        if (config.prefix !== undefined)
            this.listPrefix = config.prefix;

        this.getItem = this.getItem.bind(this);
        this.getAllItems = this.getAllItems.bind(this);
    }

    // Add an item to our list
    addItem(id, value) {
        let key = this.listPrefix + id; // Add our list prefix to the key value
        localStorage[key] = JSON.stringify(value);
    }

    // Remove an item based on its id
    removeItem(id) { 
        localStorage.removeItem(this.listPrefix + id); 
    }

    // Return a single individual item
    getItem(id) { 
        let key = this.listPrefix + id;
        return localStorage[key] === undefined ? null : JSON.parse(localStorage[key]); 
    }

    // Return array of all items
    getAllItems() {
        let keys =  Object.keys(localStorage)
                    .filter(key => key.includes(this.listPrefix)); // Get all keys that contain our prefix
                    
        keys = keys.map(key => key.replace(this.listPrefix, ""));
        return keys.map(this.getItem);
    }

}