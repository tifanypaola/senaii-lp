// Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

const ValorConta = Number(prompt("Digite o valor total da conta "));
const NumClientes = Number(prompt("Digite o numero de clientes: "));

alert(`Valor por cliente: R$${(ValorConta / NumClientes).toFixed(2)}`);


