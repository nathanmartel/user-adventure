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
        happiness: 100,
        money: 200,
        completedQuests: [],
    };
    return user;
}


function addHTMLId(element, id) {
    element.id = id;
}


// Create HTML elements and render user stats 
export function renderUserStats(user) {
    // Cannot get this to work!
    // const [userInfoContainer, userName, userStats, userHappiness, userMoney] = ['div', 'h2', 'ul', 'li', 'li'].map(item => { 
    //     document.createElement(item);
    // }); 

    const userInfoContainer = document.createElement('div');
    const userName = document.createElement('h2');
    const userNameLink = document.createElement('a');
    const userStats = document.createElement('ul');
    const userHappiness = document.createElement('li');
    const userMoney = document.createElement('li');

    const userElementVars = [userInfoContainer, userName, userStats, userHappiness, userMoney]; 
    const userElementIds = ['user-info-container', 'user-name', 'user-stats', 'user-happiness', 'user-money'];
    // const userElements = ['div', 'h2', 'ul', 'li', 'li'];
    
    userElementVars.forEach((item, i) => { 
        addHTMLId(item, userElementIds[i]);
    });

    userNameLink.textContent = `${user.name}`;
    userNameLink.href = '/map';
    userName.append(userNameLink);
    userInfoContainer.append(userName);

    userHappiness.textContent = `Happiness: ${user.happiness}`;
    userMoney.textContent = `Money: ${user.money}`;
    userStats.append(userHappiness);
    userStats.append(userMoney);
    userInfoContainer.append(userStats);

    const existingContainer = document.getElementById('user-info-container');
    existingContainer.replaceWith(userInfoContainer);

}


// Return matching object from array
export function findById(someId, someArray) {
    return someArray.find((thisItem) => { 
        if (thisItem.id === someId) return thisItem;
    });
}