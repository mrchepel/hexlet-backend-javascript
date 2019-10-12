export default (set1, set2) => {
  const result = new Set();
  set1.forEach((value) => {
    if (!set2.has(value)) {
      result.add(value);
    }
  });
  return result;
};
