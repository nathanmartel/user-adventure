// QUEST.JS
// Expected URL: /?id=[quest]

import { userKey, questsKey } from '../data/keys.js';
import { getFromLocalStorage, saveToLocalStorage, findById, renderUserStats } from '../src/utils.js';

// Get URL Params and store variable based on id
const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');

// Find matching ID from localStorage and store quest variable
const allQuests = getFromLocalStorage(questsKey);
const quest = findById(questId, allQuests);

// Get content div from DOM and add quest details
const body = document.querySelector('body');
body.style.backgroundImage = `url(${quest.image}`;
const questContainer = document.getElementById('quest-container');
const questIntroContainer = document.getElementById('quest-intro-container');
const questTitle = document.createElement('h2');
questTitle.textContent = `You walk into ${quest.name}`;
const questDescription = document.createElement('p');
questDescription.textContent = quest.choiceDescription;
questIntroContainer.append(questTitle);
questIntroContainer.append(questDescription);

// Create and append new form element to div
const questForm = document.createElement('form');
questContainer.append(questForm);

// Loop through quests to make HTML and add to DOM
const questChoicesContainer = document.createElement('div');
questChoicesContainer.classList.add('quest-choices-container');
questForm.append(questChoicesContainer);
quest.choices.forEach(choice => { 
    const questChoiceDiv = makeNewQuestChoice(choice);
    questChoicesContainer.append(questChoiceDiv);
});

// For each quest.choice, return a div with content
function makeNewQuestChoice(choice) {
    const newLabel = document.createElement('label');
    newLabel.classList.add('quest-choice');
    const newDiv = document.createElement('div');
    const newLabelSpan = document.createElement('span');
    newLabelSpan.textContent = choice.description;

    const newInput = document.createElement('input');
    newInput.type = 'radio';
    newInput.name = 'userChoice';
    newInput.value = choice.id;

    newDiv.append(newLabelSpan);
    newDiv.append(newInput);
    newLabel.append(newDiv);
    return newLabel;
}

// Add button to form
const submitButton = document.createElement('button');
submitButton.textContent = 'Choose!';
submitButton.type = 'submit';
questForm.append(submitButton);

// Add way back to map
const goBack = document.createElement('a');
goBack.href = '/map';
questContainer.append(goBack);

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
    const resultsDiv = document.getElementById('quest-results-container');
    const resultsTitle = document.createElement('h3');
    resultsTitle.textContent = choice.result;
    const resultsDescription = document.createElement('p');
    resultsDescription.textContent = `Happiness: ${choice.happiness} / Money: ${choice.money}`;
    resultsDiv.append(resultsTitle);
    resultsDiv.append(resultsDescription);
    resultsDiv.classList.remove('hidden');
    questContainer.append(resultsDiv);
    questForm.classList.add('hidden');

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

