// MAP
import { userKey, questsKey } from '../data/keys.js';
import { getFromLocalStorage, saveToLocalStorage, findById, renderUserStats } from '../src/utils.js';

// Render map in background (HTML)

// Load localStorage
const user = getFromLocalStorage(userKey);
const allQuests = getFromLocalStorage(questsKey);

// If all quests are completed, redirect to results
if (user.completedQuests.length >= allQuests.length) {
    window.location = '/results';
}

// Loop through quests to make and render HTML
const allQuestsContainer = document.getElementById('all-quests-container');
allQuests.forEach(quest => { 
    const isCompleted = findById(quest.id, user.completedQuests);
    console.log('quest.id: ', quest.id);
    console.log('user.completedQuests: ', user.completedQuests);
    console.log('isCompleted: ', isCompleted);
    let questDiv;
    isCompleted ? questDiv = makeOldQuest(quest) : questDiv = makeNewQuest(quest);
    allQuestsContainer.append(questDiv);
});

// Loop through quests to make and render HTML
function makeNewQuest(quest) {
    const newDiv = document.createElement('div');
    const newLink = document.createElement('a');
    newDiv.classList.add('quest-container');
    newLink.textContent = quest.description;
    newLink.href = `/quest/?id=${quest.id}`;
    newDiv.append(newLink);
    return newDiv;
}

// Loop through quests to make and render HTML
function makeOldQuest(quest) {
    const newDiv = document.createElement('div');
    const newLink = document.createElement('a');
    newDiv.classList.add('quest-container');
    newLink.textContent = quest.description;
    newLink.classList.add('quest-completed');
    newDiv.append(newLink);
    return newDiv;
}


// Run on load
renderUserStats(user);
const usernameSpan = document.getElementById('username-span');
usernameSpan.textContent = user.name;


// Render areas on top of map based on coords supplied by adventures data
    // Loop through quests to make and render HTML
    // Make a new div
    // Make a new anchor tag to adventure?=[id]
    // Add adventure name to anchor tag
    // Append new elements to div
    // If adventure has been completed, change style and disable link


    // THE COOL WAY:
    // const [
    //     resultLi,
    //     resultAddress,
    //     resultHours,
    //     resultDays,
    //     resultMenu,
    //     resultBeer,
    //     resultFood,
    //     resultLiquor,
    //     addToFavoritesButton,
    //     addDirectionLink,
    //   ] = [
    //     'li', 
    //     'p', 
    //     'span',
    //     'ul', 
    //     'li', 
    //     'li', 
    //     'li',
    //     'li', 
    //     'button', 
    //     'button',
    //   ].map(item => document.createElement(item);)
  
    //   const addTextContentAndId = (element, textContent, id) => {
    //         element.textContent = textContent;
    //         element.id = id;
    //   }