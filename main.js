let displayValue = '0';

function appendNumber(num) {
    if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    }
    updateDisplay();
}

function appendOperator(op) {
    displayValue += op;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        let result = eval(displayValue.replace('×', '*'));
        displayValue = result.toString();
        updateDisplay();
    } catch (e) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}


function calcularFactorial() {
    const input = document.getElementById('inputNumber');
    const resultadoDiv = document.getElementById('resultado');
    const n = parseInt(input.value);

    if (isNaN(n) || n < 0) {
        resultadoDiv.textContent = 'Número inválido';
        return;
    }

    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }

    resultadoDiv.textContent = resultado;
}

function calcularInverso() {
    const input = document.getElementById('inputNumber');
    const resultadoDiv = document.getElementById('resultado');
    const n = parseFloat(input.value);

    if (isNaN(n) || n === 0) {
        resultadoDiv.textContent = 'Número inválido o cero';
        return;
    }

    const resultado = 1 / n;
    resultadoDiv.textContent = resultado;
}


function calcularLogaritmo() {
    const input = document.getElementById('inputNumber');
    const resultadoDiv = document.getElementById('resultado');
    const n = parseFloat(input.value);

    if (isNaN(n) || n <= 0) {
        resultadoDiv.textContent = 'Solo números positivos';
        return;
    }

    const resultado = Math.log(n);
    resultadoDiv.textContent = resultado.toFixed(4);
}


function calcularNegacion() {
    const input = document.getElementById('inputNumber');
    const resultadoDiv = document.getElementById('resultado');
    const n = parseFloat(input.value);

    if (isNaN(n)) {
        resultadoDiv.textContent = 'Número inválido';
        return;
    }

    const resultado = -n;
    resultadoDiv.textContent = resultado;
}