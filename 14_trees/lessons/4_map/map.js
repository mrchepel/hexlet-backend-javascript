const map = (func, node) => {
  const newNode = func(node);
  if (node.type === 'file') {
    return newNode;
  }
  return { ...newNode, children: newNode.children.map((elem) => map(func, elem)) };
};

export default map;
