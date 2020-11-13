const assert = require('assert');
const loop = require('../index.js');

describe('loop', () => {
    it('a positive integer is used as the initial value', () => {
        // Setup
        const expectedResult = -1;
        const argument = -5;
        // Exercise
        const result = loop(argument, 100);
        // Verification
        assert.strictEqual(expectedResult, result);
    });
})