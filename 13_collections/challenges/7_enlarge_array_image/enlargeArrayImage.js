import _ from 'lodash';

export default (arr) => {
  const mapped = (item) => _.flatMap(item, (elem) => [elem, elem]);
  const reduced = (acc, item) => [...acc, mapped(item), mapped(item)];
  return arr.reduce(reduced, []);
};
