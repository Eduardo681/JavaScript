function exe11(){
    let vetorIdades = [];
    let vetorDisciplinas = [];
    let matriz = [];
    insereIdade(vetorIdades);
    insereDisciplinas(vetorDisciplinas);
    qtdProvas(vetorIdades, vetorDisciplinas, matriz);
    var cod = Number(prompt('Codigo da disciplina: '))
    alert(`A media dos alunos que fizeram mais de duas provas na disciplina escolhida é ${idade(vetorIdades,vetorDisciplinas, matriz, cod)}`)
    alert(listagem(vetorIdades,vetorDisciplinas,matriz));
    alert(`A media da idade dos alunos que não fizeram prova em alguma disciplina é ${zeroProvas(vetorIdades,vetorDisciplinas, matriz)}`)


}
function insereIdade(vetorIdades){
    for(let i = 0; i < 8; i++){
        vetorIdades.push(Number(prompt(`Digite a idade do aluno ${i+1}: `)))
    }
}
function insereDisciplinas(vetorDisciplinas){
    for(let i = 0; i < 5;i++){
        vetorDisciplinas.push(Number(prompt('Codigo da disciplina: ')))
    }
}
function qtdProvas(vetorIdades,vetorDisciplinas, matriz){
    for(let linha = 0; linha < vetorIdades.length; linha++){
        matriz[linha] = []
        for(let coluna = 0; coluna < vetorDisciplinas.length; coluna++){
            matriz[linha][coluna] = Number(prompt(`Qtd de provas do aluno ${linha} na disciplina ${vetorDisciplinas[coluna]}: `))
        }
    }
}
function listagem(vetorIdades,vetorDisciplinas,matriz){
    let cod = 'Os alunos com menos de 3 provas são: \n'
    for(let linha = 0; linha < vetorIdades.length; linha++){
        for(let coluna = 0; coluna < vetorDisciplinas; coluna++){
            matriz[linha][coluna] < 3 ? cod += String(linha) + String(vetorDisciplinas[coluna]) : false
        }
    }
    return cod;
}
function zeroProvas(vetorIdades,vetorDisciplinas, matriz){
    let soma = 0;
    let qtd = 0;
    for(let coluna = 0; coluna < vetorDisciplinas.length; coluna++){
        for(let linha = 0; linha < vetorIdades.length; linha++){
            matriz[linha][coluna] == 0 ? soma+= vetorIdades[linha] : false;
            matriz[linha][coluna] == 0 ? qtd++ : false;
        }
    }
    return soma/qtd;
}
function idade(vetorIdades,vetorDisciplinas, matriz, cod){
    var aux = vetorDisciplinas.indexOf(cod);
    var qtd = 0
    if(aux == -1){
        return 'codigo de disciplina inexistente'
    }
    else{
        for(let linha = 0; linha < vetorIdades.length; linha++){
            for(let coluna = 0; coluna < vetorDisciplinas.length; coluna++){
                if (coluna == aux){
                    if(matriz[linha][coluna] > 2){
                        if((vetorIdades[linha] > 18)&&(vetorIdades[linha] < 25)){
                            qtd++;
                        }
                    }
                }
            }
        }
        return qtd;
    }
}
