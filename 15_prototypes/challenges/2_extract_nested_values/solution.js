/* eslint-disable no-extend-native */
/* eslint-disable no-shadow */

Object.prototype.hash = function hash(str) {
  const arr = str.split('.');
  const obj = this;
  const iter = (obj, index) => {
    const keys = Object.keys(obj);
    let innerIndex = index;
    const result = keys.reduce((acc, elem) => {
      if (elem === arr[index] && obj[elem] instanceof Object) {
        innerIndex += 1;
        if (innerIndex === arr.length) {
          return obj[elem];
        }
        return iter(obj[elem], innerIndex);
      }
      return undefined;
    }, 0);
    return result;
  };

  const res = iter(obj, 0);
  return res;
};
