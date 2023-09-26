let segundos = document.getElementById("segundos");

let calcularTempo = () => {
  let valorSegundos = parseInt(segundos.value);

  const horas = Math.floor(valorSegundos / 3600);
  const minutos = Math.floor((valorSegundos % 3600) / 60);
  const segundosRestantes = valorSegundos % 60;

  let resultado = document.getElementById('resultado').innerHTML = `
                ${horas} : ${minutos} : ${segundosRestantes}`
}