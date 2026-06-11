const { test } = require('node:test');
const assert = require('node:assert');
const { add, subtract, multiply } = require('./index');

test('add: 2 + 3 = 5', () => {
  assert.strictEqual(add(2, 3), 5);
});

test('subtract: 10 - 4 = 6', () => {
  assert.strictEqual(subtract(10, 4), 6);
});

test('multiply: 3 * 4 = 12', () => {
  assert.strictEqual(multiply(3, 4), 12);
});
