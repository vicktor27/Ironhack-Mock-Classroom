const multiply = require('../../mathFunctions');
const add = require('../../add');


test('adds 1 + 2 and multiplies the result by 3 to equal 9', () => {
    const sum = add(1, 2);
    expect(multiply(sum, 3)).toBe(9);
});