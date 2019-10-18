import { cons, car, cdr } from '@hexlet/pairs';
import {
  isEmpty, l, head, tail, cons as consList,
} from '@hexlet/pairs-data';

export const make = () => l();
export const node = (tag, body) => cons(tag, body);
export const getName = (element) => car(element);
export const getValue = (element) => cdr(element);
export const append = (dom, element) => consList(element, dom);
export const toString = (list) => {
  if (isEmpty(list)) {
    return '';
  }
  const element = head(list);
  const tag = getName(element);
  return `${toString(tail(list))}<${tag}>${getValue(element)}</${tag}>`;
};
