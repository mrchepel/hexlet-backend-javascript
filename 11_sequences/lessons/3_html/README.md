## html-tags.js

Реализуйте абстракцию для создания html. Она включает в себя следующие функции:

* `make` — конструктор. Уже реализован. Не принимает параметров, и создает html-список.
* `node` — создает новый тег. Содержит два элемента, имя тега и его содержимое. Дополнительно реализуйте селекторы тега: `getName` и `getValue`.

```js
  const tag = node('div', 'what is love?');
  getName(tag); // => div
  getValue(tag); // => what is love?
```

* `append` — добавляет элемент (тег), созданный с помощью node, в html-список. Возвращает новый html-список. Новый элемент должен добавляться в начало ("голову") списка.
* `toString` — возвращает текстовое представление html на основании html-списка.

Пример использования этого интерфейса:

```js
import { make, append, toString, node } from './html-tags';

// Создаем новый html-список
const dom1 = make();

// Создаем тег и сразу добавляем его в html
const dom2 = append(dom1, node('h1', 'hello, world'));
// Еще раз
const dom3 = append(dom2, node('h2', 'header2'));

// Создаем новый тег
const tag = node('h3', 'header3');
// Добавляем созданный тег в html-список
const dom = append(dom3, tag);

// Преобразуем html-список в строчку
toString(dom);
// => <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>

// Пример без создания промежуточных переменных
toString(append(make(), node('p', 'this is Sparta!')));
// <p>this is Sparta!</p>
```

Экспортируйте все созданные функции.
