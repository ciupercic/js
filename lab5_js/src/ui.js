import { formatCurrency, formatDate } from './utils.js';
import { getTransactions, calculateTotal } from './transactions.js';

export function renderTransactions() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    
    const transactions = getTransactions();
    transactions.forEach(t => {
        const row = document.createElement('tr');
        row.dataset.id = t.id;
        row.innerHTML = `
            <td>${formatDate(t.date)}</td>
            <td>${t.category}</td>
            <td>${t.description}</td>
            <td class="${t.amount > 0 ? 'positive' : 'negative'}">${formatCurrency(t.amount)}</td>
            <td><button class="delete-btn" data-id="${t.id}">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

export function updateBalance() {
    const balance = calculateTotal();
    document.getElementById('balance').textContent = formatCurrency(balance);
}

export function showDetails(transaction) {
    const box = document.getElementById('detailsBox');
    document.getElementById('detailDate').textContent = formatDate(transaction.date);
    document.getElementById('detailCategory').textContent = transaction.category;
    document.getElementById('detailAmount').textContent = formatCurrency(transaction.amount);
    document.getElementById('detailDescription').textContent = transaction.description;
    box.classList.remove('hidden');
}

export function hideDetails() {
    document.getElementById('detailsBox').classList.add('hidden');
}

export function removeRow(id) {
    const row = document.querySelector(`tr[data-id="${id}"]`);
    if (row) row.remove();
}

