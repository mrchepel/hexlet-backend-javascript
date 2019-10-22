import assert from 'power-assert';
import getFunction from '../functions';

const indexOf = getFunction();

assert(indexOf([1, 2, 1, 2], 2) === 1);
assert(indexOf([2, 'one', 'cat', false], 8) === -1);
assert(indexOf([1, 2, 1, 2], 2, 2) === 3);
assert(indexOf([1, 2, 1, 2], 2, 4) === -1);
assert(indexOf([], 1) === -1);
