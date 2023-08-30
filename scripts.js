function calculate() {
    const num1 = parseFloat(document.getElementById('input1').value);
    const num2 = parseFloat(document.getElementById('input2').value);
    const operation = document.getElementById('operation').value;
    let result = '';
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'squareRoot':
            result = Math.sqrt(num1);
            break;

        case 'area':
                result = 0.5 * num1 * num2;
                break;

        case 'division':
                result = num1 / num2;
                break;
                
         default:
                result = 'Invalid operation';
                break;1
    }

    document.getElementById('result').textContent = `Result: ${result}`;
}
