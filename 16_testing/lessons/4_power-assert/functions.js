import _ from 'lodash';

const functions = {
  right1: _.indexOf,
  wrong1: (items) => items[0],
  wrong2: (items, value) => items.indexOf(value) + 1,
  wrong3: () => -1,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
