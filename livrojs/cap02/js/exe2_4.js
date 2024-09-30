function calcularValor() {
    const precoKg = parseFloat(document.getElementById('precoKg').value);
    const consumo = parseFloat(document.getElementById('consumo').value);

    if (isNaN(precoKg) || precoKg <= 0 || isNaN(consumo) || consumo <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const consumoKg = consumo / 1000;
    const valorAPagar = precoKg * consumoKg;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <p><strong>Preço por kg:</strong> R$ ${precoKg.toFixed(2)}</p>
        <p><strong>Consumo:</strong> ${consumo} gramas</p>
        <p><strong>Valor a pagar:</strong> R$ ${valorAPagar.toFixed(2)}</p>
    `;
}
