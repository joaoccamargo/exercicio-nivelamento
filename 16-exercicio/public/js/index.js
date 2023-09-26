let resultado = document.getElementById('resultado');
let lista_distancia = [];

for (let i = 0; i < 3; i++) {
  lista_distancia.push(prompt("Digite as três distâncias:"));
}

let conteudo = "";

lista_distancia.forEach(element => {
  conteudo += `${element} <br>`;  
  console.log(element);
});

console.log(Math.max.apply(null, lista_distancia));

resultado.innerHTML = `${conteudo}`;
resultado.innerHTML += `MAIOR DISTÂNCIA = ${Math.max.apply(
  null,
  lista_distancia
)}`;
