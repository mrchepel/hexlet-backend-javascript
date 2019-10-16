import {
  l, cons, reduce, has, reverse,
} from '@hexlet/pairs-data';


const union = (list1, list2) => {
  let result = l();
  const func = (item, acc) => (has(acc, item) ? acc : cons(item, acc));
  result = reduce(func, result, list1);
  result = reduce(func, result, list2);
  return reverse(result);
};

export default union;
