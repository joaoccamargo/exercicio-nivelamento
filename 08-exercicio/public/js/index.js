let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');

let calcularArea = () => {
    let calculoQuadrado = parseFloat(a.value * a.value);
    let calculoTriangulo = parseFloat((b.value * a.value) / 2);
    let calculoTrapezio = parseFloat(2 * calculoQuadrado + calculoTriangulo) / 2;
    let resultado = document.getElementById("resultado").innerHTML = `
                   ÁREA DO QUADRADO = ${calculoQuadrado.toFixed(4)}<br>
                   ÁREA DO TRIÂNGULO = ${calculoTriangulo.toFixed(4)}<br>
                   ÁREA DO TRAPÉZIO = ${calculoTrapezio.toFixed(4)}`;
}