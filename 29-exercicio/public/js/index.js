let resultado = document.getElementById("resultado");
let inputCNPJ = document.getElementById("cnpj");

function validarCNPJ() {
  let cnpj = inputCNPJ.value;

  // Remova caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]+/g, "");

  // Verifique se o CNPJ tem 14 dígitos
  if (cnpj.length !== 14) {
    resultado.innerHTML = `O CNPJ "${cnpj}" não é válido.`;
    return;
  }

  // Verifique se todos os dígitos são iguais (caso contrário, não é válido)
  if (/^(\d)\1+$/.test(cnpj)) {
    resultado.innerHTML = `O CNPJ "${cnpj}" não é válido.`;
    return;
  }

  // Calcule o primeiro dígito verificador
  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  let resultado1 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado1 !== parseInt(digitos.charAt(0))) {
    resultado.innerHTML = `O CNPJ "${cnpj}" não é válido.`;
    return;
  }

  // Calcule o segundo dígito verificador
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  digitos = cnpj.substring(tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }
  let resultado2 = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado2 !== parseInt(digitos.charAt(0))) {
    resultado.innerHTML = `O CNPJ "${cnpj}" não é válido.`;
    return;
  }

  resultado.innerHTML = `O CNPJ "${cnpj}" é válido.`;
}
// Para testes https://www.4devs.com.br/gerador_de_cnpj