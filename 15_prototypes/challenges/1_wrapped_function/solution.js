// eslint-disable-next-line no-extend-native
Object.prototype.wrap = function wrap(func) {
  return (...args) => func(this, ...args);
};
