function calcular() {
    var input1 = document.getElementById('n1');
    var select = document.getElementById('op');
    var input2 = document.getElementById('n2');

    var res = document.getElementById('res');

    var n1 = Number(input1.value);
    var n2 = Number(input2.value);

    switch (select.value) {
        case '+':
            var calc = n1 + n2;
            break;
        case '-':
            var calc = n1 - n2;
            break;
        case '*':
            var calc = n1 * n2;
            break;
        case '/':
            var calc = n1 / n2;

            break;
        case '**':
            var calc = n1 ** n2;
            break;
    }
    res.innerHTML = `O resultado do cálculo é: <strong>${calc.toFixed(2).replace('.', ',')}</strong>`;
}