let numero_inicial = document.getElementById('numero_inicial')
let numero_final = document.getElementById('numero_final');
let resultado = document.getElementById('resultado')
let soma = 0;

let somarNumeros = () => {
  let inicial = parseInt(numero_inicial.value);
  let final = parseInt(numero_final.value);

  if(inicial <= final){
    for (let i = inicial; i <= final; i++) {
      soma += i;
    }
  }
  resultado.innerHTML = `Resultado: ${soma}`
}
