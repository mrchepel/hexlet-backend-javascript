import _ from 'lodash';

const functions = {
  right1: _.gt,
  wrong1: _.gte,
  wrong2: _.eq,
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
