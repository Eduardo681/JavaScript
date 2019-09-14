/*Faça uma funcao que verifique se um inteiro é positivo ou negativo*/
function posNeg(n){
    if(n == 0){
        return 'igual a zero'
    } else {
        if(n > 0){
            return 'positivo'
        } else {
            return 'negativo'
        }
    } 
}
console.log(`O numero é ${posNeg(-554)}.`)