const magic = (...args) => {
  const sum = args.reduce((acc, item) => acc + item, 0);
  const f = (...rest) => magic(sum, ...rest);
  f.valueOf = () => sum;
  return f;
};

export default magic;
