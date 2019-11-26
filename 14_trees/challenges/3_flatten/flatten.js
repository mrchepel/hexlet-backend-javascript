const flatten = (array) => array.reduce((acc, elem) => {
  if (Array.isArray(elem)) {
    return acc.concat(flatten(elem));
  }
  return acc.concat(elem);
}, []);

export default flatten;
