# ЛАБОРАТОРНАЯ РАБОТА №3
## Основы работы с массивами, функциями и объектами в JavaScript
### Цель работы:
#### Изучить основы работы с массивами и функциями в JavaScript, применяя их для обработки и анализа транзакций.
### Задание:
#### Разработать консольное приложение для анализа транзакций, реализовав набор функций для обработки массива объектов
### Ход работы:
#### Был создан массив объектов `transactions`, содержащий информацию о финансовых операциях. Каждый объект включает следующие поля: `transaction_id`, `transaction_date`, `transaction_amount`, `transaction_type`, `transaction_description`, `merchant_name` и `card_type`
```Javascript 
{
        transaction_id: 1,
        transaction_date: "2026-03-01",
        transaction_amount: 100,
        transaction_type: "debit",
        transaction_description: "Groceries",
        merchant_name: "Supermarket",
        card_type: "debit"
    }
{
        transaction_id: 2,
        transaction_date: "2026-03-02",
        transaction_amount: 200,
        transaction_type: "credit",
        transaction_description: "Salary",
        merchant_name: "Company",
        card_type: "credit"
    }
```
### Реализация функций:
```Javascript
function calculateTotalAmount(transactions) {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
}
function getTransactionByType(transactions, type) {
    return transactions.filter(t => t.transaction_type === type);
}
function findTransactionById(transactions, id) {
    return transactions.find(t => t.transaction_id === id); //
}
function calculateAverageTransactionAmount(transactions) {
    if (!transactions.length) return 0;
    return calculateTotalAmount(transactions) / transactions.length;
}
```
### Tестирование
#### Реализованные функции были протестированы путем вывода результатов в консоль. Тесты подтвердили корректность работы алгоритмов на предоставленном наборе данных.
```Javascript
console.log("Total:", calculateTotalAmount(transactions));
console.log("Debit:", getTransactionByType(transactions, "debit"));
console.log("Find ID 2:", findTransactionById(transactions, 2));
console.log("Average:", calculateAverageTransactionAmount(transactions));
```
### Вывод:
#### В ходе выполнения работы были изучены основные методы работы с массивами и функциями в JavaScript. Были получены навыки обработки данных, включая фильтрацию, поиск и агрегацию информации при работе с массивами объектов
### Контрольные вопросы:
#### 1. Какие методы массивов можно использовать для работы с объектами?
#### Для этого подходят стандартные методы: `map()`, `filter()`, `reduce()`, `find()` и `forEach()`. Каждый из них помогает либо найти нужную информацию, либо как-то её изменить.
#### 2. Как сравнивать даты в `JavaScript`?
#### Чтобы не запутаться, лучше всего превратить строку с датой в специальный объект Date. После этого их можно сравнивать как обычные числа: через `«больше» (>)`, `«меньше» (<)` или `«равно» (===)`.
#### 3. чем разница между `map`, `filter` и `reduce`?
#### `map()` берет массив и делает из него новый такого же размера, но с измененными данными (например, вытаскивает только цены).
#### `filter()` — создает новый массив.
#### `reduce()` — «сжимает» весь массив до одного числа или значения.
