// APP
import { makeUser, saveToLocalStorage } from './src/utils.js';
import { userKey, questsKey } from './data/keys.js';
import { quests } from './data/data.js';


// Run on load
// Save quests to localStorage
saveToLocalStorage(questsKey, quests);

// Get form from DOM 
const signInForm = document.getElementById('signIn');

// On form submit, get form keys, make and save user, and proceed to Map
signInForm.addEventListener('submit', (event) => { 
    event.preventDefault();
    const formData = new FormData(signInForm);
    const user = makeUser(formData);
    saveToLocalStorage(userKey, user);
    window.location.href = 'map';
});