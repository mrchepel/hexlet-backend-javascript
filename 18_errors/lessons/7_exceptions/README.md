## HexletFs.js

Реализуйте функцию `copySync(src, dest)`, которая копирует файл из `src` в `dest`.

* Если dest это путь до директории, то имя файла берется из src и добавляется к dest
* Если dest это путь до файла (существующего или нет), то его содержимое становится равным src

```js
files.copySync('/opt/file.txt', '/etc');
files.statSync('/etc/file.txt').isFile(); // true
```

Возможные ошибки:

* `EISDIR` - возникает в случае, если `src` это директория, а не файл.
* `ENOENT` - возникает в случае, если `src` не существует, а так же в случае, когда не существует двух последних элементов в `dest`. Например, если в качестве dest указан `/path/to/file` и, при этом, в файловой системе нет ни `file` ни `to`, или `/path/to` указывает на файл, то должно сработать исключение, так как функция копирования не может создавать промежуточных директорий (в данном случае надо досоздать `to`).
