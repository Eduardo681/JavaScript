function exe(){
    let linguagem = []
    const continentes = ['Americano','Europeu','Oceania','Ásiatico']
    let aux
    let notas = []
    for(let i = 0; i < 5;i++){
        linguagem.push(prompt('Linguagem: '))
    }
    for(let i = 0; i < linguagem.length;i++){
        aux = []
        for(let j = 0; j < continentes.length; j++){
            aux.push(prompt(`Nota da linguagem ${linguagem[i]} no continente - ${continentes[j]}: `).toUpperCase())
        }
        notas.push(aux)
    }
    alert(excelentes(linguagem, continentes,notas))
    alert(nota_maior(linguagem,continentes,notas))
}


function excelentes(linguagem,continentes,notas){
    let soma;
    let msg = ''
    for(let i = 0; i < linguagem.length;i++){
        soma = 0
        for(let j = 0; j < continentes.length; j++){
            notas[i][j] == 'E' ? soma++ : false;
        }
        msg +=(`A linguagem ${linguagem[i]} obteve ${soma} excelentes.\n`)
    }
    return msg 
}
function nota_maior(linguagem,continentes,notas){
    let qtd
    let msg = ''
    for(let j = 0; j < continentes.length;j++){
        qtd = [0,0,0,0,0]
        for(let i = 0; i < linguagem.length; i++){
            notas[i][j] == 'E' ? qtd[0] += 1: false;
            notas[i][j] == 'MB' ? qtd[1] += 1: false;
            notas[i][j] == 'B' ? qtd[2] += 1: false;
            notas[i][j] == 'F' ? qtd[3] += 1: false;
            notas[i][j] == 'MF' ? qtd[4] += 1: false;
        }
        let maior = qtd[0]
        qtd.forEach((item)=>{
            item > maior ? maior = item :false;
        })
        let aux1, maior_nota
        aux1 = qtd.indexOf(maior)
        aux1 == 0 ? maior_nota = 'E':false;
        aux1 == 1 ? maior_nota = 'MB':false;
        aux1 == 2 ? maior_nota = 'B':false;
        aux1 == 3 ? maior_nota = 'F':false;
        aux1 == 4 ? maior_nota = 'MF':false;
        msg += `O continente ${continentes[j]} foi maioria ${maior_nota}.\n`
    }
    return msg
}
