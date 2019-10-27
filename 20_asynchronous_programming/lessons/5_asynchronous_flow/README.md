## info.js

Реализуйте и экспортируйте асинхронную функцию `compareFileSizes`, которая сравнивает размеры двух файлов. Если первый больше второго, то она возвращает единицу, если размеры равны, то возвращает ноль, иначе — -1.

```js
import { compareFileSizes } from './info';

compareFileSizes('file1', 'file2', (_err, result) => console.log(result));
```

## Подсказка

* Для реализации этого задания, нужно воспользоваться функцией [fs.stat](https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback), которая использовалась в примерах теории
* [Math.sign](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)
