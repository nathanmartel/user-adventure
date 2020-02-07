// RESULTS

import { userKey } from '../data/keys.js';
import { getFromLocalStorage, renderUserStats, evalHappiness, evalMoney } from '../src/utils.js';

// Get the results from localStorage
const user = getFromLocalStorage(userKey);


// Render user stats
renderUserStats(user);

// Evaluate for happiness and money
const happinessResult = evalHappiness(user.happiness);
const moneyResult = evalMoney(user.money);

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
    window.location.href = '../';
});


