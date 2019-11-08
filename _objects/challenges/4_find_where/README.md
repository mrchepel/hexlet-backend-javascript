## arrays.js

Реализуйте и экспортируйте по умолчанию функцию `findWhere`, которая принимает на вход массив (элементы которого — это ассоциативные массивы) и пары ключ-значение (тоже в виде массива), а возвращает первый элемент исходного массива, значения которого соответствуют переданным парам (всем переданным). Если совпадений не было, то функция должна вернуть `null`.

```js
findWhere(
  [
    { title: 'Book of Fooos', author: 'FooBar', year: 1111 },
    { title: 'Cymbeline', author: 'Shakespeare', year: 1611 },
    { title: 'The Tempest', author: 'Shakespeare', year: 1611 },
    { title: 'Book of Foos Barrrs', author: 'FooBar', year: 2222 },
    { title: 'Still foooing', author: 'FooBar', year: 3333 },
    { title: 'Happy Foo', author: 'FooBar', year: 4444 },
  ],
  { author: 'Shakespeare', year: 1611 }
); // { title: 'Cymbeline', 'author: 'Shakespeare', 'year: 1611 }
```
