export default (arr1, arr2) => {
  const filtered = arr1.filter((value) => arr2.includes(value));
  return [...new Set(filtered)];
};
