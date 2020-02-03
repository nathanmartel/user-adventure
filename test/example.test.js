// IMPORT MODULES under test here:
import { makeUser, saveToLocalStorage, findById, evalHappiness, evalMoney } from '../src/utils.js';

const test = QUnit.test;


test('Does a user get made from form input and saved in localStorage as expected?', function(assert) {

    const myForm = new FormData;
    myForm.append('name', 'username');
    const user = makeUser(myForm);
    const userKey = user.id;
    saveToLocalStorage(userKey, user);
    const actualResultString = localStorage.getItem(userKey);
    const actualResult = JSON.parse(actualResultString);

    const expectedResult = {
        id: 'username',
        name: 'username',
        happiness: 100,
        money: 200,
        completedQuests: [],
    };

    assert.deepEqual(expectedResult, actualResult);
});

test('Does findById work as expected?', function(assert) {

    const testArray = [{ 
        id: 'foo', 
        foo: 'bar',
    }, { 
        id: 'hopLeaf',
        foo: 'bar',
    }, { 
        id: 'bar',
        foo: 'bar',
    }];       
    const actualResult = findById('hopLeaf', testArray);
    const expectedResult = { id: 'hopLeaf', foo: 'bar' };

    assert.deepEqual(actualResult, expectedResult);
});

test('Is the user happy with happiness = 101?', function(assert) {
    const actualResult = evalHappiness(101);
    const expectedResult = `You're elated! Best day ever!`;
    
    assert.equal(expectedResult, actualResult);
});

test('Is the user broke with money = 20?', function(assert) {
    const actualResult = evalMoney(20);
    const expectedResult = `You're broke!`;
    
    assert.equal(expectedResult, actualResult);
});

