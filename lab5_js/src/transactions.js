import { generateId } from './utils.js';

let transactions = [];

export function addTransaction(description, amount, category) {
    const transaction = {
        id: generateId(),
        date: new Date(),
        amount: category === 'income' ? amount : -amount,
        category: category,
        description: description
    };
    transactions.push(transaction);
    return transaction;
}

export function getTransactions() {
    return transactions;
}

export function getTransactionById(id) {
    return transactions.find(t => t.id === id);
}

export function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
}

export function calculateTotal() {
    return transactions.reduce((sum, t) => sum + t.amount, 0);
}

