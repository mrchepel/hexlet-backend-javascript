## file.js

Реализуйте и экспортируйте асинхронную функцию `touch`, которая создает файл если его не существует.

```js
import { touch } from './file';

touch('/myfile').then(() => console.log('created!'));
```

##Подсказка

* [fs.access](https://nodejs.org/api/fs.html#fs_fspromises_access_path_mode) - проверка сущестования файла
