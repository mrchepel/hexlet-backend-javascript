const filter = (f, node) => {
  if (!f(node)) {
    return null;
  }
  if (node.type === 'directory') {
    return { ...node, children: node.children.map((n) => filter(f, n)).filter((v) => v) };
  }
  return node;
};

export default filter;
