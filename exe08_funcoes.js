// Faça uma funcao que receba um numero inteiro e positivo, retorne o fatorial
function fatorial(n){
    fat = 1
    for(let i = 2; i <= n;i++){
        fat = fat*i
    }
    return fat
}
console.log(`O fatorial será: ${fatorial(5)}.`)