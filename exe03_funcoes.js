/*Faça uma função que receba duas cadeias de caracteres e diga se são iguais, retorne 0 se for, caso contrario, o primeiro indice nao correspondente*/
function confereIgual(x, y) {
  if (x === y) {
    return 0;
  } else {
    for (var i = 0; i < x.length; i++) {
      if (x[i] === y[i]) {
        continue;
      } else {
        break;
      }
    }
    return i;
  }
}
console.log(confereIgual("teste", "teste"));
