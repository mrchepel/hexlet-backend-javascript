## writer.js

Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает о завершении работы через переданный колбек.

import write from './writer';

```js
write('./myfile', 'data', () => {
  console.log('success');
});
```

## Подсказки:

для записи в файл используйте функцию [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback).
