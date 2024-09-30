function calcularFinanciamento(preco) {
    const entrada = preco * 0.50; 
    const saldo = preco - entrada;
    const parcelas = saldo / 12; 
    return {
        entrada: entrada.toFixed(2),
        parcelas: parcelas.toFixed(2)
    };
}
function iniciarPrograma() {

    const modelo = prompt("Digite o modelo do veículo:");
    const preco = parseFloat(prompt("Digite o preço do veículo:"));
    
    if (isNaN(preco) || preco <= 0) {
        alert("Por favor, insira um preço válido.");
        return;
    }

    const { entrada, parcelas } = calcularFinanciamento(preco);

    alert(`Modelo: ${modelo}\nValor da entrada: R$ ${entrada}\nSaldo em 12x: R$ ${parcelas}`);
}