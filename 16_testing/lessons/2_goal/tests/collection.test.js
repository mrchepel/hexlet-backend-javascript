import getFunction from '../functions';

const get = getFunction();

const object = { key: 'value' };
if (get(object, 'key') !== 'value') {
  throw new Error('Fail');
}

if (get(object, 'key', 'default') !== 'value') {
  throw new Error('Fail');
}

if (get(object, 'another', 'default') !== 'default') {
  throw new Error('Fail');
}
