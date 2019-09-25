/*Faça uma funcao para calcular o peso ideal - IMC*/
function imc(alt,sexo){
    return sexo == 'M' ? peso = 72.7 * alt - 58 : sexo == 'F' ? peso = 62.1 * alt - 44.7 : 'Sexo invalido';
}
console.log(imc(1.75,'F'))