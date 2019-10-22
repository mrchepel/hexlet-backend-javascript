import assert from 'assert';
import getFunction from '../functions';

const take = getFunction();

assert.deepEqual(take([4, 3], 9), [4, 3]);
assert.deepEqual(take([1, 2, 3]), [1]);
assert.deepEqual(take([], 2), []);
assert.deepEqual(take([1, 2, 3], 0), []);
assert.deepEqual(take([]), []);
