let palavra = prompt("Digite uma palavra:");
let resultado = document.getElementById('resultado')
let calculos = calcularPalavras(palavra)

function calcularPalavras(palavra) {
  palavra = palavra.toLowerCase();

  let vogais = 0;
  let consoantes = 0;

  for (let i = 0; i < palavra.length; i++) {
    const letra = palavra.charAt(i);

    if ("aeiou".includes(letra)) {
      vogais++;
    } else if (letra >= "a" && letra <= "z") {
      consoantes++;
    }
  }

  return { vogais, consoantes };
}
resultado.innerHTML = `Palavra: ${palavra} <br>
                       Vogais: ${calculos.vogais}<br>
                       Consoantes: ${calculos.consoantes}`;