## tests/set.test.js

Напишите тесты для функции `set(obj, path, value)`, которая возвращает и изменяет (или добавляет) значение в объект по указанному пути. Функция мутирует объект.

```
const object = { a: [{ b: { c: 3 } }] };

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // => 4

set(object, ['x', '0', 'y', 'z'], 5);
console.log(object.x[0].y.z); // => 5
```

## Подсказки

* Переиспользуйте объект данных
* [_.set](https://lodash.com/docs/4.17.14#set)
