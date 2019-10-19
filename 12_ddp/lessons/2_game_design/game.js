import {
  cons, car, cdr,
} from '@hexlet/pairs';
import {
  cons as consList, l, random, head, reverse,
} from '@hexlet/pairs-data';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const message = `${name1} был убит`;
      const logItem = cons(car(head(log)), message);
      return consList(logItem, log);
    }
    const card = random(cards);
    const cardName = car(card);
    const damage = cdr(card)();
    const healthAfterDamage = health2 - damage;
    const message = `Игрок '${name1}' применил '${cardName}' против '${name2}' и нанес урон '${damage}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, healthAfterDamage), message);
    } else if (order === 2) {
      stats = cons(cons(healthAfterDamage, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(healthAfterDamage, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards) => (name1, name2) => run(name1, name2, cards);
