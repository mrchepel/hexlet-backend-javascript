## filter.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход предикат и дерево, а возвращает отфильтрованное дерево по предикату.

```
const tree = mkdir('/', [
  mkdir('etc', [
    mkdir('nginx', [
      mkdir('conf.d'),
    ]),
    mkdir('consul', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hosts'),
]);

filter((n) => n.type === 'directory', tree);
// {
//   name: '/',
//   type: 'directory',
//   meta: {},
//   children: [
//     {
//       name: 'etc',
//       type: 'directory',
//       meta: {},
//       children: [
//         {
//           name: 'nginx',
//           type: 'directory',
//           meta: {},
//           children: [{
//             name: 'conf.d',
//             type: 'directory',
//             meta: {},
//             children: [],
//           }],
//         },
//         {
//           name: 'consul',
//           type: 'directory',
//           meta: {},
//           children: [],
//         },
//       ],
//     },
//   ],
// }
```
