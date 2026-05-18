export function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

export function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

