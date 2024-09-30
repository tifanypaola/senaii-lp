function calcularPrecoPromocao() {

    const descricao = document.getElementById('descricao').value;
    const preco = parseFloat(document.getElementById('preco').value);

    if (isNaN(preco) || preco <= 0) {
        alert('Por favor, insira um preço válido.');
        return;
    }

    const valorTotal = preco * 2;
    const centavos = valorTotal % 1;
    const valorPromocao = valorTotal - centavos;
    const resultadoDiv = document.getElementById('resultado');
}