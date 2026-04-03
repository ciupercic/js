/**
 * @typedef {Object} Transaction
 * @property {number} transaction_id - Уникальный идентификатор
 * @property {string} transaction_date - Дата в формате YYYY-MM-DD
 * @property {number} transaction_amount - Сумма транзакции
 * @property {string} transaction_type - Тип: 'debit' или 'credit'
 * @property {string} transaction_description - Описание
 * @property {string} merchant_name - Название магазина
 * @property {string} card_type - Тип карты
 */

const transactions = [
    {
        transaction_id: 1,
        transaction_date: "2026-03-01",
        transaction_amount: 100,
        transaction_type: "debit",
        transaction_description: "Groceries",
        merchant_name: "Supermarket",
        card_type: "debit"
    },
    {
        transaction_id: 2,
        transaction_date: "2026-03-02",
        transaction_amount: 200,
        transaction_type: "credit",
        transaction_description: "Salary",
        merchant_name: "Company",
        card_type: "credit"
    }
];

/**
 * Вычисляет общую сумму всех транзакций
 * Использует метод reduce()
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateTotalAmount(transactions) {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Возвращает транзакции указанного типа
 * Использует метод filter()[cite: 13, 20]
 * @param {Transaction[]} transactions
 * @param {string} type - 'debit' или 'credit'
 * @returns {Transaction[]}
 */
function getTransactionByType(transactions, type) {
    return transactions.filter(t => t.transaction_type === type);
}

/**
 * Находит транзакцию по её уникальному ID
 * Использует метод find()[cite: 13, 22]
 * @param {Transaction[]} transactions
 * @param {number} id
 * @returns {Transaction|undefined}
 */
function findTransactionById(transactions, id) {
    return transactions.find(t => t.transaction_id === id); //
}

/**
 * Вычисляет среднее значение суммы транзакций
 * Проверяет длину массива во избежание ошибки
 * @param {Transaction[]} transactions
 * @returns {number}
 */
function calculateAverageTransactionAmount(transactions) {
    if (!transactions.length) return 0;
    return calculateTotalAmount(transactions) / transactions.length;
}
console.log("Total:", calculateTotalAmount(transactions));
console.log("Debit:", getTransactionByType(transactions, "debit"));
console.log("Find ID 2:", findTransactionById(transactions, 2));
console.log("Average:", calculateAverageTransactionAmount(transactions));