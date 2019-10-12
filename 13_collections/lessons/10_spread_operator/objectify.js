const objectify = (collection, select) => (
  collection.reduce((acc, element) => (
    { ...acc, [select(element)]: element }
  ), {}));

export default objectify;
