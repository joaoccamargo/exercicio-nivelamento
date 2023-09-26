let resultado = document.getElementById('resultado')

let ordenarLista = () => {
  let lista = [];

  for (let i = 0; i < 5; i++) {
    let valores = parseInt(prompt('Digite 5 valores'))
    lista.push(valores)
  }

  //console.log(lista.sort())
  resultado.innerHTML += `Números recebidos: ${lista}<br>`
  resultado.innerHTML += `Ordenados : ${lista.sort()}`
};
