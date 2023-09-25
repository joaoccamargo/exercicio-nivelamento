let nome = document.getElementById('nome');
let valor = document.getElementById('valor');
let horas = document.getElementById('horas');

let calcularPagamento = () => {
    let calculo = parseFloat(horas.value * valor.value);
    document.getElementById('resultado').innerHTML = `
        O pagamento para ${nome.value} deve ser ${calculo.toFixed(2)}
    `
}