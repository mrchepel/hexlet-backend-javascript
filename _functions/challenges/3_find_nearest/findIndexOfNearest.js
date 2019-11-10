export default (arr, num) => {
  if (arr.length === 0) {
    return null;
  }
  const nearestElement = arr.reduce(
    (acc, elem) => (Math.abs(elem - num) < Math.abs(acc - num) ? elem : acc),
  );
  return arr.indexOf(nearestElement);
};
