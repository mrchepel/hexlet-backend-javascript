import {
  l, isEmpty, head, filter,
} from '@hexlet/pairs-data';

const sameParity = (list) => {
  const isEven = (n) => n % 2 === 0;
  const isOdd = (n) => n % 2 !== 0;
  if (isEmpty(list)) {
    return l();
  }
  if (isEven(head(list))) {
    return filter(isEven, list);
  }
  return filter(isOdd, list);
};

export default sameParity;
