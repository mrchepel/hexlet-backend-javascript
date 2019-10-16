## itinerary.js

Реализуйте и экспортируйте по умолчанию функцию `itinerary`, которая выстраивает маршрут между городами.

Функция принимает 3 аргумента:
* дерево городов
* город старта
* город окончания маршрута
и возвращает массив городов, выстроенный в том же порядке, в котором они находятся на пути следования по маршруту.

## Примеры

```
const tree = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

itinerary(tree, 'Dubna', 'Kostroma');
// => ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

itinerary(tree, 'Borisovka', 'Kurchatov');
// => ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
```

## Подсказки

Используйте функции из библиотеки [lodash](https://lodash.com/docs/).
