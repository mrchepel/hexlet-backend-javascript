## game.js

Допишите функцию `iter`, которая является частью ядра игрового движка и описывает в себе логику одного хода

## Алгоритм

1. Если здоровье игрока, которого атаковали на предыдущем шаге (в примерах этого и следующего пунктов мы предполагаем, что это первый игрок с именем `name1`), меньше или равно 0, то добавляем в лог элемент с сообщением вида `${name1} был убит` и возвращаем лог. Игра закончена.
2. В ином случае, берём рандомную карту, вычисляем урон, записываем новое здоровье, формируем сообщение формата:

    ```js
    const message = `Игрок '${name1}' применил '${cardName}'
    против '${name2}' и нанес урон '${damage}'`;
    ```
   
    Формируем элемент лога формата `cons(cons(health1, health2), message)` и добавляем его в лог.
3. Повторяем.

## Подсказки

* Параметр `order` в функции `iter` нужен для определения того, какой игрок сейчас атакует.
* Используйте функцию `random` для выбора карты из колоды.
* Колода карт передаётся в игру через параметр `cards`.
