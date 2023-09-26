let valor_x = document.getElementById("valor_x");
let resultado = document.getElementById('resultado')

let mostrarPares = () => {
  let x = parseInt(valor_x.value);
  let count = 0;

  for (let i = 2; i <= x; i++) {
    if(i % 2 === 0){
      count++;
      resultado.innerHTML += `${i}<br>`
    }
  }
  
}
