const isEven = (number) => (number % 2 === 0);

export default (array) => {
  const [first] = array;
  return array.filter((item) => isEven(first) === isEven(item));
};
