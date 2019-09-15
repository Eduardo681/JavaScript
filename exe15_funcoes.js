//Funcao que reccebe um vetor e retorna a quantidade de pares
function pares(vetor){
    let qtd = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i]% 2 == 0){
            qtd++
        }
    }
    return qtd;
}
let v = [1,2,3,4,5,6,7,8,9,10]
console.log(`A quantidade de pares é ${pares(v)}.`)