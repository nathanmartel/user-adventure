// IMPORT MODULES under test here:
import { makeUser, saveToLocalStorage } from '../src/utils.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(true, true);
});

test('Does a user get made from form input and saved in localStorage as expected?', function(assert) {

    const myForm = new FormData;
    myForm.append('name', 'username');
    const user = makeUser(myForm);
    const userKey = user.id;
    saveToLocalStorage(userKey, user);
    const actualResult = localStorage.getItem(userKey);
    
    const expectedResult = {
        id: 'username',
        name: 'username',
        health: 100,
        money: 200,
        completedQuests: [],
    };

    assert.deepEqual(expectedResult, actualResult);
});
