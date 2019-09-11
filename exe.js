function exe03(){
    var vet = []
    var objeto = {}
    var tIdade= 0, total2 = 0,maiorIdade,totalHomens = 0,cont = 0,mediaIdade,percHomens
    for(let i = 0; i < 3; i++){
        object = {}
        object.nome = prompt("Nome: ")
        object.sexo = prompt("Sexo (M or F): ")
        object.altura = Number(prompt("Altura: "))
        object.idade = Number(prompt("Idade: "))
        object.olhos = prompt("Cor dos olhos: ")
        vet.push(object)
    }
    maiorIdade = vet[0].idade
    for(let i = 0; i < 3; i++){
        if ((vet[i].olhos == "C") && (vet[i].altura > 1.6)){
            tIdade += vet[i].idade
            cont += 1
        }
        if (maiorIdade < vet[i].idade){
            maiorIdade = vet[i].idade
        }
        if (((vet[i].sexo == "F")&&(40 >= vet[i].idade >= 20))||((vet[i].olhos == "V")&&(vet[i].altura < 1.7))){
            total2 += 1
        }
        if (vet[i].sexo == "M"){
            totalHomens += 1
        }
    }
    mediaIdade = tIdade / cont
    percHomens = (totalHomens/vet.length)*100
    alert("Dado1: "+ mediaIdade.toFixed(2)+"\nA maior idade: "+maiorIdade+"\nDado3: "+total2+"\nO percentual de homens é: "+percHomens.toFixed(2)+"%.")
}
/*Foi realizada uma pesquisa entre 20 habitantes de uma cidade. De cada habitante foram coletados estes dados:
    idade, sexo, renda familiar e número de filhos
Faça um programa que leia estes dados, armazenando-os em um vetor, calcule e mostre:
    a media dos salarios
    maior/menor idade
    qtd de F com mais de 2 filhos e com renda familiar inferior a R$600,00*/
function exe04(){
    let vetor = []
    let objeto = {}
    let i, totalSalario = 0, mediaSalario, maiorIdade, menorIdade, maisVelho, maisNovo, qtd = 0
    for(i = 0;i < 3;i++){
        objeto = {}
        objeto.nome = prompt("Digite o nome do habitante: ")
        objeto.idade = Number(prompt("Qual a idade de "+objeto.nome+"?"))
        objeto.sexo = prompt("Sexo (M or F): ")
        objeto.renda = Number(prompt("Renda familiar: "))
        objeto.filho = Number(prompt("Quantidade de filhos: "))
        vetor.push(objeto)
    }
    maiorIdade = vetor[0].idade
    menorIdade = vetor[0].idade
    maisVelho = vetor[0].idade
    maisNovo = vetor[0].idade
    for(i = 0; i < vetor.length; i++){
        totalSalario =+ vetor[i].renda
        if(maiorIdade < vetor[i].idade){
            maiorIdade = vetor[i].idade
            maisVelho = vetor[i].nome
        }
        if(menorIdade > vetor[i].idade){
            menorIdade = vetor[i].idade
            maisNovo = vetor[i].nome
        }
        if((vetor[i].sexo == "F")&&(vetor[i].filho > 2)&&(vetor[i].renda < 600)){
            qtd += 1
        }
    }
    mediaSalario = totalSalario/vetor.length
    
    alert("A média do salario da população é: R$"+mediaSalario.toFixed(2)+
            "\nO habitante mais velho é "+maisVelho+" com "+maiorIdade+" anos,"+
            "\nO habitante mais novo é "+maisNovo+" com "+menorIdade+" anos"+
            "\nA quantidade de mulheres com mais de dois filhos e renda menor que R$600,00 é "+qtd+".")
}
function exe05(){
    var vet = []
    for(var j=0; j<5;j++){
        var objeto = {}
        // coloca dados no objeto
        objeto.codigo = Number(prompt("Código"))
        objeto.descricao = prompt("Descrição")
        objeto.qtde = Number(prompt("Qtde"))
        objeto.preco = Number(prompt("Preço"))
        // coloca objeto no vetor ordenado
        for(var i=0;i<vet.length;i++){ // varre o vetor
            if (objeto.codigo < vet[i].codigo){ // procura por um elemento maior
                vet.splice(i, 0, objeto); // adiciona na posição i
                alert("Adicionado com sucesso")
                break; // sai do laço
            }
        }
        if (i == vet.length){ // adiciona na última ou na primeira posição
            vet.push(objeto);
            alert("Adicionado com sucesso")
        }
    }
    // permite o usuário alterar os valores
    var cod = Number(prompt("Informe codigo"))
    for(var i=0;i<5;i++){
        if (cod == vet[i].codigo){
            vet[i].descricao = prompt("Descrição")
            vet[i].qtde = Number(prompt("Qtde"))
            vet[i].preco = Number(prompt("Preço"))
            break;// sai do for
        }
    }
    if (i == 5){
        alert("Produto não existe")
    }
    for(var i=0;i<vet.length;i++){ // mostra o vetor
        alert(vet[i].codigo + " " + vet[i].descricao + " " + 
                vet[i].preco + " " +vet[i].qtde)
    }
}