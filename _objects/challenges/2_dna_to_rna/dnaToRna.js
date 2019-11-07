/* eslint no-restricted-syntax: ["off", "ForOfStatement"] */

export default (dna) => {
  const match = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  let result = '';
  for (const key of dna) {
    if (!(key in match)) {
      return null;
    }
    result += match[key];
  }
  return result;
};
