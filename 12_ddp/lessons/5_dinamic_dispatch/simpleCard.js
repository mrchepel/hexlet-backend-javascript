import { cons, car, cdr } from '@hexlet/pairs';
import { attach } from '@hexlet/tagged-types';
import { definer } from './generic';

const defmethod = definer('SimpleCard');

const make = (name, damagePoints) => attach('SimpleCard', cons(name, damagePoints));

export default make;

defmethod('getName', (self) => car(self));

defmethod('damage', (self) => cdr(self));
