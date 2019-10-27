## info.js

Реализуйте и экспортируйте асинхронную функцию `getDirectorySize`, которая считает размер переданной директории (не включая поддиректории). Анализ размера файла должен происходить паралелльно, для этого воспользуйтесь библиотекой async

```js
import { getDirectorySize } from './info';

getDirectorySize('/usr/local/bin', (err, size) => {
  console.log(size);
});
```

## Подсказка

* [fs.readdir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback) - чтение содержимого директории
* [path.join](https://nodejs.org/api/path.html#path_path_join_paths) - конструирует пути
* [async.map](http://caolan.github.io/async/v3/docs.html#map)
* [fs.stat](https://nodejs.org/api/fs.html#fs_fs_stat_path_options_callback) - информация о файле
* [_.sumBy](https://lodash.com/docs/4.17.11#sumBy) - нахождение суммы в массиве
