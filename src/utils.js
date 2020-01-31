// UTILS

// Save passed data to localStorage
export function saveToLocalStorage(key, element) {
    const elementString = JSON.stringify(element);
    localStorage.setItem(key, elementString);
}

// Get data from localStorage
export function getFromLocalStorage(key) {
    const myResults = localStorage.getItem(key);
    if (!myResults) {
        const myEmptyResults = [];
        return myEmptyResults;
    } else {
        const myExistingResults = JSON.parse(myResults);
        return myExistingResults;
    }
}


// Initialize and return user object from form Data
export function makeUser(formData) {
        // * Expand this to include id, check if localStorage ID exists, and make unique ID if so
    const userName = formData.get('name');
    const user = {
        id: userName,
        name: userName,
        health: 100,
        money: 200,
        completedQuests: [],
    };
    return user;
}

// Return matching object from array
export function findById(someId, someArray) {
    return someArray.find((thisItem) => { 
        if (thisItem.id === someId) return thisItem;
    });
}