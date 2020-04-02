'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:
const whisper = (str) => {
    return str.toLowerCase()
}

//* Begin of tests
const assert = require('assert');

//* Begin of tests

assert.strictEqual(typeof whisper, 'function');
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('HELLO'), 'hello');
assert.strictEqual(whisper('hEllo'), 'hello');


// assert.fail('You must write your own tests');
// End of tests */
