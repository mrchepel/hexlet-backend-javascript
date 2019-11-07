import hash from 'string-hash';

const make = () => ({});

const set = (map, key, value) => {
  const index = hash(key);
  if (index in map) {
    map[index] = value; // eslint-disable-line
    return false;
  }
  map[index] = value; // eslint-disable-line
  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = hash(key);
  if (!(index in map)) {
    return defaultValue;
  }
  return map[index];
};

export { make, get, set };
