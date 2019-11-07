/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export default (array) => {
  const result = {};
  for (let i = 0; i < array.length; i += 1) {
    const [key, value] = array[i];
    result[key] = value;
  }
  return result;
};
