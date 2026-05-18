import { addTransaction, deleteTransaction, getTransactionById } from './transactions.js';
import { renderTransactions, updateBalance, showDetails, hideDetails, removeRow } from './ui.js';

// Form submission
document.getElementById('transactionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const category = document.getElementById('categorySelect').value;
    const amount = parseFloat(document.getElementById('amountInput').value);
    const description = document.getElementById('descriptionInput').value;
    
    if (!category || !amount || !description) {
        alert('Fill all fields');
        return;
    }
    
    if (amount <= 0) {
        alert('Amount must be > 0');
        return;
    }
    
    addTransaction(description, amount, category);
    renderTransactions();
    updateBalance();
    
    document.getElementById('transactionForm').reset();
});

document.getElementById('tableBody').addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        const id = e.target.dataset.id;
        if (confirm('Delete this transaction?')) {
            deleteTransaction(id);
            removeRow(id);
            updateBalance();
            hideDetails();
        }
    }
});

document.getElementById('tableBody').addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if (row && !e.target.classList.contains('delete-btn')) {
        const transaction = getTransactionById(row.dataset.id);
        if (transaction) {
            showDetails(transaction);
        }
    }
});

document.getElementById('closeBtn').addEventListener('click', hideDetails);

// Initial render
renderTransactions();
updateBalance();

