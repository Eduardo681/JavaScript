/**Faça uma funcao que receba um vetor e o divida em par e impár*/
function parImpar(vetor){
    let vet_par = []
    let vet_impar = []
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] % 2 == 0){
            vet_par.push(vetor[i])
        } else {
            vet_impar.push(vetor[i])
        }
    }
    return [vet_impar, vet_par]; //nao é possivel retornar 2 valores, portanto pode colocar em um vetor
}
let v = [1,2,3,4,5,6,7,8,9,10]
console.log(parImpar(v))