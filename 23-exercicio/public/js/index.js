let valor_x = document.getElementById('valor_x');
let valor_y = document.getElementById("valor_y");

let resultado = document.getElementById('resultado')

let somarImpares = () => {
  let inicial = parseInt(valor_x.value);
  let final = parseInt(valor_y.value);
  let soma = 0;

  for (let i = inicial; i <= final; i++) {
    if (i % 2 !== 0) {
      soma += i;
    }
  }
  resultado.innerHTML = `SOMA DOS ÍMPARES = ${soma}`;
};
