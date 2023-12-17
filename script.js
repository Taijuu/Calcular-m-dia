const n1 = document.getElementById('nota1');
const n2 = document.getElementById('nota2');
const n3 = document.getElementById('nota3');
const n4 = document.getElementById('nota4');
const result = document.getElementById('result');

function media() {
  const nota1 = parseFloat(n1.value);
  const nota2 = parseFloat(n2.value);
  const nota3 = parseFloat(n3.value);
  const nota4 = parseFloat(n4.value);
  console.log(nota4, nota3, nota2, nota1)
  if (isNaN(nota3) || isNaN(nota2) || isNaN(nota1)) {
    return "digite apenas números"
}
  if (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10) {
    return "digite apenas números de 0 a 10";
  }
  if (isNaN(nota4)){
    return 4 * 6 - (nota1 + nota2 + nota3);
  }
    else {
    return (nota1 + nota2 + nota3 + nota4) / 4;
  }
}

function print() {
    result.innerHTML = media();
}