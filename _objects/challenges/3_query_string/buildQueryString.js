/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export default (param) => {
  const result = [];
  const keys = Object.keys(param).sort();
  for (const key of keys) {
    result.push(`${key}=${param[key]}`);
  }
  return result.join('&');
};
