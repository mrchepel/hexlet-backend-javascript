## html-tags.js

Реализуйте и экспортируйте функцию `reduce` для библиотеки `html-tags`:

```
import { node, append, make, reduce } from '@hexlet/html-tags';

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));

reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2
```

Реализуйте и экспортируйте функцию `emptyTagsCount`, которая считает количество пустых тегов. Тип тега задается первым параметром функции.

```
import { make, append, node } from '@hexlet/html-tags';

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));

emptyTagsCount('blockquote', html6); // 2
```

## Примечания

Функцию `headersCount` можно использовать для наглядного сопоставления частного варианта свёртки с обобщённой реализацией операции отображения (собственно, `reduce`).

## Подсказки

* При необходимости вы можете самостоятельно импортировать функцию `toString` из библиотеки `@hexlet/pairs-data` и использовать её для отладки решений. Эта функция возвращает строковое представление списка
* При необходимости вы можете самостоятельно импортировать функцию `toString` из библиотеки `@hexlet/html-tags` и использовать её для отладки решений. Эта функция возвращает строковое представление html-списка
* Для разрешения противоречий в случае импорта нескольких функций с одинаковыми именами используйте псевдонимы (aliases)
