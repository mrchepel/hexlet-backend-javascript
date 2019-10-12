export default (arr1, arr2) => {
  const newSet = new Set(arr2);
  return arr1.filter((elem) => !newSet.has(elem));
};
