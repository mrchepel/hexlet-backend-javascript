import path from 'path';

const findFilesByName = (root, str) => {
  const iter = (n, p, acc) => {
    if (n.type === 'file' && n.name.includes(str)) {
      return [...acc, path.join(...p, n.name)];
    }
    if (!n.children) {
      return acc;
    }
    return n.children.reduce((cAcc, nn) => iter(nn, [...p, n.name], cAcc), acc);
  };
  return iter(root, [], []);
};

export default findFilesByName;
