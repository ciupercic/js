const Calculator = (() => {
    let display = document.getElementById('display');
    let expression = '';
    
    /**
     * @param {string} value 
     */
    const updateDisplay = (value) => {
        display.textContent = value || '0';
    };

    /**
     * @param {string} num 
     */
    const addNumber = (num) => {
        if (num === '.' && expression.includes('.')) return;
        expression += num;
        updateDisplay(expression);
    };

    /**
     * @param {string} op 
     */
    const addOperator = (op) => {
        if (!expression) return;
        if ('+-*/.'.includes(expression.slice(-1))) {
            expression = expression.slice(0, -1);
        }
        expression += op;
        updateDisplay(expression);
    };

    const deleteChar = () => {
        expression = expression.slice(0, -1);
        updateDisplay(expression || '0');
    };

    const clear = () => {
        expression = '';
        updateDisplay('0');
    };

    const calculate = () => {
        try {
            if (!expression) return;
            const result = Function('"use strict"; return (' + expression + ')')();
            expression = String(result);
            updateDisplay(result);
        } catch (e) {
            updateDisplay('Error');
            expression = '';
        }
    };

    const init = () => {

        document.querySelectorAll('[data-number]').forEach(btn => {
            btn.addEventListener('click', () => addNumber(btn.dataset.number));
        });
        document.querySelectorAll('[data-operator]').forEach(btn => {
            btn.addEventListener('click', () => addOperator(btn.dataset.operator));
        });

    
        document.querySelector('[data-action="clear"]').addEventListener('click', clear);
        document.querySelector('[data-action="delete"]').addEventListener('click', deleteChar);
        document.querySelector('[data-action="equals"]').addEventListener('click', calculate);

        document.addEventListener('keydown', (e) => {
            if (/[0-9.]/.test(e.key)) addNumber(e.key);
            if ('+-*/'.includes(e.key)) addOperator(e.key);
            if (e.key === 'Enter' || e.key === '=') calculate();
            if (e.key === 'Backspace') deleteChar();
            if (e.key === 'Escape') clear();
        });
    };

    return {
        init: init
    };
})();

document.addEventListener('DOMContentLoaded', Calculator.init);
