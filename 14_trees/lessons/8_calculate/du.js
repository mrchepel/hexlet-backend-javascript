import { reduce } from '@hexlet/immutable-fs-trees';

const du = (root) => {
  const calcSize = (tree) => {
    const f = (acc, n) => (n.type === 'file' ? n.meta.size + acc : acc);
    return reduce(f, tree, 0);
  };

  const result = root.children.map((n) => [n.name, calcSize(n)]);
  return result.sort(([, a], [, b]) => b - a);
};

export default du;
