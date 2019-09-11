/*Foi feita uma estatistica em 15 estados brs pra coletar dados sobre acidentes de transito. Em cada estado foi onbservado o seguinte aspecto:
    *nome do estado
    *numero de veiculos que circulam neste estado
    *numero de acidentes de transito
*Crie um programa que permita conhecer:
    *o maior e menor indice de acidentes de transito e o nome dos estados em que ocorreram
    *o percentual de veiculo em cada estado
    *a media dos acidentes em cada um dos estados
*/
var b = document.querySelector("button")
b.addEventListener('click', exe08)

function exe08(){
    let vetor = []
    let objeto = {}
    let nomeMaior, nomeMenor, somaVeiculos = 0, somaAcidentes = 0;
    for(let i = 0; i < 3; i++){ // alimenta o vetor
        objeto = {}
        objeto.nome = prompt("Estado: ")
        objeto.veiculos = Number(prompt("Número de veiculos: "))
        objeto.acidentes = Number(prompt("Número de acidentes: "))
        vetor.push(objeto)
    }
    var maior = vetor[0].acidentes/ vetor[0].veiculos
    var menor = vetor[0].acidentes/ vetor[0].veiculos
    for(let i = 0; i < vetor.length; i++){
        let indice = vetor[i].acidentes/vetor[i].veiculos
        if(maior <  indice){
            maior = indice;
            nomeMaior = vetor[i].nome;
        }
        if(menor > indice){
            menor = indice;
            nomeMenor = vetor[i].nome;
        }
        somaVeiculos += vetor[i].veiculos;
        somaAcidentes = somaAcidentes +  vetor[i].acidentes;
    }
    var percentual = '';
    var media = ''
    for(let i = 0; i < vetor.length; i++){
        let percentualEstado = vetor[i].veiculos/somaVeiculos*100;
        percentual = percentual + vetor[i].nome + '--- '+percentualEstado.toFixed(2) + '%\n';
        let mediaEstado = vetor[i].acidentes/somaAcidentes*100;
        media = media + vetor[i].nome + '---' + mediaEstado.toFixed(2) + '%\n';
    }
    alert("O maior indice de acidentes foi "+maior.toFixed(2)*100+ "% no estado de "+nomeMaior+
        "\nO menor indice de acidentes foi "+menor.toFixed(2)*100+"% no estado de "+nomeMenor)
    alert("O percentual de veiculos foi de: \n"+percentual)
    alert("A media foi de acidentes foi de: \n"+media)
}