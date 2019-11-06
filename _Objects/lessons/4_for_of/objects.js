/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */
export default (data, keys) => {
  const result = {};
  const dataKeys = Object.entries(data);

  for (const [key, value] of dataKeys) {
    if (keys.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};
