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
const myNumbers = [10, 20, 30];
console.log("--- Тест printArray ---");
printArray(myNumbers);
const doubled = map(myNumbers, (x) => x * 2);
console.log("--- Результат map (x2) ---");
console.log(doubled);
const sum = reduce(myNumbers, (acc, val) => acc + val, 0);
console.log("--- Сумма через reduce ---");
console.log(sum);