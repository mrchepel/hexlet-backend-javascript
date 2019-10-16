import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'img', 'br']);

const buildNode = (...ast) => {
  const [name] = ast;
  return (singleTagsList.has(name)) ? new SingleTag(...ast) : new PairedTag(...ast);
};

export default buildNode;
