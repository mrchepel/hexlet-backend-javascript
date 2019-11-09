## users.js

Реализуйте функцию `takeOldest`, которая принимает на вход список пользователей и возвращает самых взрослых. Количество возвращаемых пользователей задается вторым параметром, который по умолчанию равен единице.

### Пример использования

```js
const users = [
    { name: 'Tirion', birthday: '1988-11-19' },
    { name: 'Sam', birthday: '1999-11-22' },
    { name: 'Rob', birthday: '1975-01-11' },
    { name: 'Sansa', birthday: '2001-03-20' },
    { name: 'Tisha', birthday: '1992-02-27' },
    { name: 'Chris', birthday: 'Dec 25, 1995' },
];

takeOldest(users);
// [
//  { name: 'Rob', birthday: '1975-01-11' },
// ];
```

Другие примеры смотрите в модуле с тестами.

## Подсказки

* Обратите внимание (это видно на примере пользователя `Chris`), что даты могут быть в разных форматах (RFC2822 или ISO 8601). Для преобразования дат в единое представление — unixtimestamp — используйте метод [Date.parse()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)
* [sortBy](https://lodash.com/docs/4.17.15#sortBy)
