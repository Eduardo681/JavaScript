/**Foi realizada uma pesquisa entre 5 habitantes de uma cidade
 * Foram coletados os dados: idade, sexo, salario e numero de filhos
 * Faça uma funcao que leia esses dados em um vetor.
 * Faça funções que recebam esse vetor por parametro, e retornem a media de salario entre os habitantes
 * a menor e a maior idade 
 * e a quantidade de mulheres com tres filhos que recebe ae R$500.
 */
let b1 = document.querySelector('#exe13')
b1.addEventListener('click',exe13)

function exe13(){
    let vetor = []
    for(let i = 0; i < 5; i++){
        insereVetor(vetor);
    }
    alert(`A média dos salarios é R$${mediaSalario(vetor).toFixed(2)},
    A maior idade é ${maiorIdade(vetor)},
    A menor idade é ${menorIdade(vetor)},
    A quantidade de mulheres com tres filhos e salario ate R$500 é ${qtdMulheres(vetor)}.`)
}
function insereVetor(vetor){
    objeto = {}
    objeto.nome = prompt("Nome: ")
    objeto.idade = Number(prompt("Idade: "))
    objeto.sexo = prompt("Sexo: ")
    objeto.salario = Number(prompt("Salario: "))
    objeto.filhos = Number(prompt("Quantidade de filhos: "))
    vetor.push(objeto)
}
function mediaSalario(vetor){
    soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i].salario
    }
    m = soma/vetor.length
    return m;
}
function maiorIdade(vetor){
    let maiorIdade = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(maiorIdade < vetor[i].idade){
            maiorIdade = vetor[i].idade
        }
    }
    return maiorIdade;
}
function menorIdade(vetor){
    let menorIdade = vetor[0]
    for(let i = 0; i < vetor.length;i++){
        if(menorIdade > vetor[i].idade){
            menorIdade = vetor[i].idade
        }
    }
    return menorIdade;
}
function qtdMulheres(vetor){
    let qtd = 0;
    for(let i = 0; i < vetor.length; i++){
        if((vetor[i].sexo == 'F') && (vetor[i].salario <= 500)&&(vetor[i].filhos == 3)){
            qtd ++; 
        }
    }
    return qtd;
}
