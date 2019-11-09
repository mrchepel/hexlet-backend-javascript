const run = (text) => {
  const last = (str) => {
    const len = str.length;
    if (len === 0) {
      return null;
    }
    return str[len - 1];
  };
  return last(text);
};

export default run;
