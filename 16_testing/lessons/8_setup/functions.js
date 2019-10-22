/* eslint-disable no-param-reassign */

import { set } from 'lodash';

const functions = {
  right1: set,
  wrong1: (obj, path, value) => {
    set(obj, path, value);
    obj.key = 'value';
  },
};

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1';
  return functions[name];
};
