// QUEST
// Expected URL: /?id=[quest]

import { userKey, questsKey } from '../data/keys.js';
import { getFromLocalStorage, saveToLocalStorage, findById, renderUserStats } from '../src/utils.js';

// Get URL Params and store variable based on id
const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

// Find matching ID from localStorage and store quest variable
const allQuests = getFromLocalStorage(questsKey);
const quest = findById(questId, allQuests);
console.log('Quest is: ', quest);

// Get content div from DOM and add quest details
const questContainer = document.getElementById('quest-container');
const questTitle = document.createElement('h1');
questTitle.textContent = `You walk into ${quest.name}`;
const questDescription = document.createElement('p');
questDescription.textContent = quest.description;
questContainer.append(questTitle);
questContainer.append(questDescription);

// Create and append new form element to div
const questForm = document.createElement('form');
questContainer.append(questForm);

// Loop through quests to make HTML and add to DOM
quest.choices.forEach(choice => { 
    const questChoiceDiv = makeNewQuestChoice(choice);
    questForm.append(questChoiceDiv);
});

// For each quest.choice, return a div with content
function makeNewQuestChoice(choice) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('quest-choice');

    const newLabel = document.createElement('label');
    const newLabelSpan = document.createElement('span');
    newLabelSpan.textContent = choice.description;

    const newInput = document.createElement('input');
    newInput.type = 'radio';
    newInput.name = 'userChoice';
    newInput.value = choice.id;

    newLabel.append(newInput);
    newLabel.append(newLabelSpan);
    newDiv.append(newLabel);
    return newDiv;
}

// Add button to form
const submitButton = document.createElement('button');
submitButton.textContent = 'Choose!';
submitButton.type = 'submit';
questForm.append(submitButton);

// On form submit, get user choice and process...
questForm.addEventListener('submit', (event) => { 
    event.preventDefault();
    const formData = new FormData(questForm);
    const userChoice = formData.get('userChoice');
    
    // Match user choice to array of choices
    const choice = findById(userChoice, quest.choices);
    console.log(choice);
    
    // Add results to user
    const user = getFromLocalStorage(userKey);
    user.happiness += choice.happiness;
    user.money += choice.money;

    // Show results in DOM 
    const resultsDiv = document.getElementById('results-container');
    const resultsTitle = document.createElement('h2');
    resultsTitle.textContent = choice.result;
    const resultsDescription = document.createElement('p');
    resultsDescription.textContent = `Health: ${choice.happiness} / Money: ${choice.money}`;
    resultsDiv.append(resultsTitle);
    resultsDiv.append(resultsDescription);

    // Render user stats
    renderUserStats(user);

    // Mark quest as completed
    user.completedQuests.push(quest.id);

    // Update localStorage 
    saveToLocalStorage(userKey, user);
    
    // Show button to head back to map
    const mapLink = document.createElement('a');
    const mapButton = document.createElement('button');
    mapButton.textContent = 'Go back to Clark St.';
    mapLink.href = '../map';
    mapLink.append(mapButton);
    resultsDiv.append(mapLink);

});

// Run on load
const user = getFromLocalStorage(userKey);
renderUserStats(user);

