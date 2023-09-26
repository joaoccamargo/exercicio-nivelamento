let coeficiente_a = document.getElementById("coeficiente_a");
let coeficiente_b = document.getElementById("coeficiente_b");
let coeficiente_c = document.getElementById("coeficiente_c");

let resultado = document.getElementById("resultado");

let calcularEqua = () => {
    let a = parseFloat(coeficiente_a.value);
    let b = parseFloat(coeficiente_b.value);
    let c = parseFloat(coeficiente_c.value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      resultado.innerHTML = `Pelo menos um dos coeficientes não é um número válido.`;
      return;
    }

    let delta = b * b - 4 * a * c;
    let x1, x2;

    if (delta > 0) {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultado.innerHTML  = `X1 = ${x1.toFixed(4)} <br>`;
      resultado.innerHTML += `X2 = ${x2.toFixed(4)}`;
    } else if (delta === 0) {
      x1 = -b / (2 * a);
       resultado.innerHTML = `X1 = ${x1.toFixed(4)}`;
    } else {
      resultado.innerHTML = "Esta equação não possui raízes reais";
    }
}