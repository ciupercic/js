# Лабораторная работа №2
### Тема: Реализация базовых методов работы с массивами.
### Цель работы.
#### Изучить принципы реализации базовых методов работы с массивами с использованием колбэков: `forEach, map, filter, find, some, every, reduce.` Закрепить навыки написания функций с корректным возвратом результатов и обработкой граничных случаев.
### 1. Реализация функций вывода массива
```Javascript
function printArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("Аргумент должен быть массивом");
    }
    for (let i = 0; i < array.length; i++) {
        console.log(`Element ${i}: value ${array[i]}`);
    }
}

function printArray1(array) {
    if (!Array.isArray(array)) {
        throw new Error("Аргумент должен быть массивом");
    }
    for (let i = 0; i < array.length; i++) {
        console.log(`${i}: ${array[i]}`);
    }
}
```
### 2. Реализация функции forEach
```Javascript
function forEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
```
### 3. Реализация функции map
```Javascript
function map(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }

    const result = [];
    for (let i = 0; i < array.length; i++) {
        // Используем прямое присваивание по индексу, чтобы избежать .push()
        result[i] = callback(array[i], i, array);
    }
    return result;
}
```
### 4. Реализация функции filter
```Javascript
function filter(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }

    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result[result.length] = array[i];
        }
    }
    return result;
}
```
### 5. Реализация функции find
```Javascript
function find(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}
```
### 6. Реализация функции some
```Javascript
function some(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
```
### 7. Реализация функции every
```Javascript
function every(array, callback) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }

    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}
```
### 8. Реализация функции reduce
```Javascript
function reduce(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        throw new Error("Первый аргумент должен быть массивом");
    }
    if (typeof callback !== "function") {
        throw new Error("Второй аргумент должен быть функцией");
    }
    let accumulator;
    let startIndex;
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (array.length === 0) {
            return undefined;
        }
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}
```
### Вывод
#### Вывод по лабораторной работе

В ходе выполнения данной лабораторной работы были изучены и реализованы основные методы обработки массивов в JavaScript: `forEach, map, filter, find, some, every и reduce.`
 ~~~~