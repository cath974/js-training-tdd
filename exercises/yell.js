'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
const yell = (str) => {
    return str.toUpperCase()
}

// Your code:

//* Begin of tests
const assert = require('assert');
//* Begin of tests

assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell('hello'), 'HELLO');
assert.strictEqual(yell('hEllo'), 'HELLO');

// End of tests */
// assert.fail('You must write your own tests');


// End of tests */
