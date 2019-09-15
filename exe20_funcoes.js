/**A prefeitura de uma cidade fez uma pesquisa entre o seus habitantes coletando dados sobre salario e numero de filhos
 * Faça uma funcao que leia um numero não determinado de pessoas e retorne
 * a media de salario da população
 * a media do numero de filhos
 * o maior salario
 * o percentual de salarios < 350
 */
let b2 = document.querySelector('#exe20')
b2.addEventListener('click',exe20)
function adicionar(vetor){
    objeto = {}
    objeto.nome = prompt("Nome: ")
    objeto.salario = Number(prompt("Salario: "))
    objeto.filhos = Number(prompt("Filhos: "))
    vetor.push(objeto)
}
function mediaSalario(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i].salario
    }
    let m = soma/vetor.length
    return m; 
}
function mediaFilhos(vetor){
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma += vetor[i].filhos
    }
    m = soma/vetor.length
    return m;
}
function maiorSalario(vetor){
    let maior = vetor[0].salario
    for(let i = 0; i < vetor.length; i++){
        if(maior < vetor[i].salario){
            maior = vetor[i]
        }
    }
    return maior;
}
function percSalario(vetor){
    let qtd = 0;
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i].salario <= 350){
            qtd++;
        }
    }
    perc = qtd/vetor.length;
}
function exe20(){
    vetor = []
    for(let i = 0; i < 5; i++){
        adicionar(vetor)
    }
    alert(`A media dos salarios é R$${mediaSalario(vetor).toFixed(2)},
    A media de filhos é ${mediaFilhos(vetor)},
    O maior salario é R$${maiorSalario(vetor).toFixed(2)},
    O percentual de salarios é ${percSalario(vetor).toFixed(2)}%.`)
}