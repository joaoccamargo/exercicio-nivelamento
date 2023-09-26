let valor_n = document.getElementById("valor_n");
let resultado = document.getElementById('resultado')

let mostrarTabuada = () => {
  let n = parseInt(valor_n.value);

  for (let i = 1; i <= 10; i++) {
      resultado.innerHTML += `${n} x ${i} = ${n * i} <br> `;
  }
}
