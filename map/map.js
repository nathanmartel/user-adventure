// MAP.JS
import { userKey, questsKey } from '../data/keys.js';
import { getFromLocalStorage, renderUserStats } from '../src/utils.js';

// Run on load
// Load localStorage
const user = getFromLocalStorage(userKey);
const allQuests = getFromLocalStorage(questsKey);
const allQuestsContainer = document.getElementById('map-container');

// If all quests are completed, redirect to results
if (user.completedQuests.length >= allQuests.length) {
    window.location = '../results';
}

// Render user stats and quests
renderUserStats(user);
renderQuests(allQuests, allQuestsContainer);


// Loop through quests to make HTML and add to DOM
function renderQuests(allQuests, allQuestsContainer) {
    let questDiv;
    allQuests.forEach(quest => { 
        const isCompleted = user.completedQuests.includes(quest.id);
        questDiv = makeQuest(quest, isCompleted);
        allQuestsContainer.append(questDiv);
    });
}

// Make and return HTML for a new quest
function makeQuest(quest, isCompleted) {
    const newLink = document.createElement('a');
    newLink.classList.add('map-choice');
    newLink.href = `../quest/?id=${quest.id}`;
    const newDiv = document.createElement('div');
    newDiv.textContent = quest.description;
    if (isCompleted) { 
        newLink.classList.add('quest-completed');
        newLink.href = '#';
    }
    newLink.append(newDiv);
    return newLink;
}