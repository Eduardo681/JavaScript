//Função que recebe vetor e retorna a soma
function somaVetor(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i]
    }
    return soma;
}
let v = [1,2,3,4,10]
console.log(`A soma do vetor é ${somaVetor(v)}.`)