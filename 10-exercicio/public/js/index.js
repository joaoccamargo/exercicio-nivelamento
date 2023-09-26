let primeiro_valor = document.getElementById("primeiro_valor");
let segundo_valor = document.getElementById("segundo_valor");
let terceiro_valor = document.getElementById("terceiro_valor");
 let resultado = document.getElementById("resultado");

let calcularMenor = () => {

  if (primeiro_valor.value <= segundo_valor.value && primeiro_valor.value <= terceiro_valor.value) {
    resultado.innerHTML = ` MENOR = ${primeiro_valor.value}`;
  } else if (segundo_valor.value <= primeiro_valor.value && segundo_valor.value <= terceiro_valor.value) {
    resultado.innerHTML = `MENOR = ${segundo_valor.value}`;
  } else {
    resultado.innerHTML = `MENOR = ${terceiro_valor.value}`;
  }

 
}