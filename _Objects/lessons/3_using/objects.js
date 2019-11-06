/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

const getIn = (objects, keys) => {
  let current = objects;
  for (const key of keys) {
    if (!current[key]) {
      return null;
    }
    current = current[key];
  }
  return current;
};

export default getIn;
