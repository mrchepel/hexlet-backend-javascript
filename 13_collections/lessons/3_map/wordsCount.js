export default (words, stopWords) => {
  const result = new Map();
  const mapped = words.map((item) => item.toLowerCase());
  const filtered = mapped.filter((item) => stopWords.indexOf(item) === -1);
  filtered.forEach((key) => {
    if (result.has(key)) {
      return result.set(key, result.get(key) + 1);
    }
    return result.set(key, 1);
  });
  return result;
};
