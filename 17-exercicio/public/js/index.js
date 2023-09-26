let numero1 = parseInt(prompt("Digite dois números inteiros:"))
let numero2 = parseInt(prompt("Digite dois números inteiros:"));

let resultado = document.getElementById('resultado');

resultado.innerHTML += `${numero1} <br> ${numero2} <br>`

if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
 resultado.innerHTML += "São múltiplos.";
} else {
  resultado.innerHTML += "Não múltiplos.";
}
