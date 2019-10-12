export default (arr, ...rest) => {
  const newSet = new Set(rest);
  return arr.filter((elem) => !newSet.has(elem));
};
