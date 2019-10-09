/**Faça um programa que receba
 * a nota de 15 alunos em 5 provas diferentes (matriz 15x5)
 * o nome dos 15 alunos (vetor)
 * calcule e mostre o nome do aluno, media e situação
 * a media da sala
 */
function exe04(){
    var alunos = [];
    var notas = [];
    insereAlunos(alunos);
    insereNotas(notas,alunos)
    situacao(notas,alunos)
    alert(`A nota média da turma é ${media(notas)}.`)
}


function insereAlunos(vetor){
    for(var i = 0; i < 3; i++){
        var nome = prompt(`Nome do aluno ${i+1}: `)
        vetor.push(nome)
    }
}
function insereNotas(matriz,vetor){
    for(var linha = 0; linha < 3;linha++){
        matriz[linha] = [];
        for(var coluna = 0; coluna < 5; coluna++){
            matriz[linha][coluna] = Number(prompt(`Nota de ${vetor[linha]} na prova ${coluna+1}: `));
        }    
    } 
}
function situacao(matriz,vetor){
    var situacao;
    for(var linha = 0; linha < 3; linha++){
        var soma = 0
        for(var coluna = 0; coluna < 5; coluna++){
            soma += matriz[linha][coluna];
        }
        var media = soma/5
        media >= 6 ? situacao = 'aprovado' : media >= 3 ? situacao = 'exame': situacao = 'reprovado';
        alert(`${vetor[linha]}, teve média de ${media}, portanto esta ${situacao}.`)
    }
}
function media(matriz){
    var soma = 0
    for(var linha = 0; linha < 3; linha++){
        for(var coluna = 0; coluna < 5; coluna++){
            soma += matriz[linha][coluna];
        }   
    }
    return soma/15
}