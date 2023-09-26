let palavra = document.getElementById('palavra');
let resultado = document.getElementById('resultado');

palavra.addEventListener("input", () => {
  let palindromo = palavra.value;

  let isPalindromo = (palindromo) => {
    palindromo = palindromo.toLowerCase().replace(/\s/g, "");
    const palavraInvertida = palindromo.split("").reverse().join("");
    return palindromo === palavraInvertida;
  };

  if (isPalindromo(palindromo)) {
    console.log(`"${palindromo}" é um palíndromo.`);
    resultado.innerHTML = `${palindromo} é um palíndromo.`;
  } else {
    console.log(`"${palindromo}" não é um palíndromo.`);
    resultado.innerHTML = `${palindromo} não é um palíndromo.`;
  }
});