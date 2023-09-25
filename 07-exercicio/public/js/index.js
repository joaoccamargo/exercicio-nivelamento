let distancia = document.getElementById('distancia');
let combustivel_gasto = document.getElementById('combustivel_gasto');

let calcularConsumo = () => {
    let calculo = parseFloat(distancia.value / combustivel_gasto.value);
    let resultado = document.getElementById('resultado').innerHTML = `Consumo médio = ${calculo.toFixed(3)}`
}