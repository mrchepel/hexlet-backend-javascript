## users.js

Реализуйте и экспортируйте по умолчанию функцию `getGirlFriends`, которая принимает на вход список пользователей и возвращает плоский список подруг всех пользователей (без сохранения ключей). Друзья каждого пользователя хранятся в виде массива в ключе `friends`. Пол доступен по ключу `gender` и может принимать значения `male` или `female`.

### Пример использования

```js
const users = [
  {
    name: 'Tirion',
    friends: [
      { name: 'Mira', gender: 'female' },
      { name: 'Ramsey', gender: 'male' },
    ],
  },
  { name: 'Bronn', friends: [] },
  {
    name: 'Sam',
    friends: [
      { name: 'Aria', gender: 'female' },
      { name: 'Keit', gender: 'female' },
    ],
  },
  {
    name: 'Rob',
    friends: [
      { name: 'Taywin', birdhday: 'male' },
    ],
  },
];

getChildren(users);
// [
//   { name: 'Mira', gender: 'female' },
//   { name: 'Aria', gender: 'female' },
//   { name: 'Keit', gender: 'female' },
// ];
```

Другие примеры смотрите в модуле с тестами.

## Подсказки

* [flatten](https://lodash.com/docs/#flatten)
