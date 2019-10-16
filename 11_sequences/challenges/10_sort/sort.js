import {
  l, isEmpty, head, tail, concat, filter,
} from '@hexlet/pairs-data';


const sort = (list) => {
  if (isEmpty(list) || isEmpty(tail(list))) {
    return list;
  }
  const barrier = head(list);
  const newList = tail(list);
  const middleAndRight = filter((x) => x >= barrier, newList);
  const left = filter((x) => x < barrier, newList);
  return concat(concat(sort(left), l(barrier)), sort(middleAndRight));
};

export default sort;
