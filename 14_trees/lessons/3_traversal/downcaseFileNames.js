const downcaseFileNames = (directory) => {
  if (directory.type === 'file') {
    return { ...directory, name: directory.name.toLowerCase() };
  }
  return { ...directory, children: directory.children.map(downcaseFileNames) };
};

export default downcaseFileNames;
