/*Faça uma funcao que verifique se um inteiro é positivo ou negativo*/
function posNeg(n){
    return n == 0 ? 'igual a zero' : n > 0 ? 'positivo' : 'negativo'
}
console.log(`O numero é ${posNeg(0)}.`)