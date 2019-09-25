/**Faça uma funcao que receba um vetor e o divida em par e impár*/
function parImpar(vetor){
    let vet_par = []
    let vet_impar = []
    vetor.forEach(item => {
        item % 2 == 0 ? vet_par.push(item) : vet_impar.push(item)
    });
    return `Impars: ${vet_impar}
Pares: ${vet_par}`; 
}
let v = [1,2,3,4,5,6,7,8,9,10]
console.log(parImpar(v))