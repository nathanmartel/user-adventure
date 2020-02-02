// RESULTS

import { userKey, questsKey } from '../data/keys.js';
import { getFromLocalStorage, saveToLocalStorage, findById, renderUserStats } from '../src/utils.js';
import { happinessText, moneyText } from '../data/results-data.js';

// Get the results from localStorage
const user = getFromLocalStorage(userKey);

// Render user stats
renderUserStats(user);

// Evaluate for happiness and money
let happinessResult;
let moneyResult;
switch (user.happiness) {
    case '< 50': { 
        happinessResult = happinessText.depressed;
        break;
    }
    case '< 100': { 
        happinessResult = happinessText.meh;
        break;
    }
    default: { 
        happinessResult = happinessText.happy;
    }
}

switch (user.money) {
    case '< 50': { 
        moneyResult = moneyText.poor;
        break;
    }
    case '< 100': { 
        moneyResult = moneyText.meh;
        break;
    }
    default: { 
        moneyResult = moneyText.rich;
    }
}


// Display results message
const resultsContainer = document.getElementById('results-container');
const happinessP = document.createElement('p');
happinessP.textContent = happinessResult;
const moneyP = document.createElement('p');
moneyP.textContent = moneyResult;
resultsContainer.append(happinessP);
resultsContainer.append(moneyP);

// Ask if user wants to play again
const playAgainButton = document.createElement('button');
playAgainButton.textContent = 'Play again?';
resultsContainer.append(playAgainButton);
playAgainButton.addEventListener('click', () => {
    window.location.href = '/index.html';
});


