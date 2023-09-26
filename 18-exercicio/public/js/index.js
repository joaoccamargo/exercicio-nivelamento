let anuncio = prompt("Você vai digitar a temperatura em qual escala (C/F)?").toUpperCase();
let resultado = document.getElementById('resultado')

switch (anuncio) {
  case 'C':
    let anunciocelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
    let calculocelsius = (anunciocelsius * 9/5) + 32;
    resultado.innerHTML = `Temperatura equivalente em Fahrenheit: ${calculocelsius.toFixed(2)}`
    break;
  case 'F':
    let anunciofah = parseFloat(prompt("Digite a temperatura em Fahrenheit: "));
    let calculofah = (anunciofah -32) * 5/9;
    resultado.innerHTML = `Temperatura equvalente em Celsius: ${calculofah.toFixed(2)}`
    break;

  default:
    resultado.innerHTML = "Digite C ou F para obter a temperatura equivalente";
    break;
}