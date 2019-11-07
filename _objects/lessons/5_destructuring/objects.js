/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

export default (list) => {
  const result = [];
  for (const user of list) {
    const { name: userName } = user;
    result.push(userName);
  }
  return result.sort();
};
