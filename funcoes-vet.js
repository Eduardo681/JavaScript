function exe02(){
    var vet = []
    var tSalario = 0
    var tFilhos = 0
    var mulherSalario = 0
    var object = {}
    for(let i = 0; i < 3; i++){
        object = {}
        object.nome = prompt("Nome: ")
        object.salario = Number(prompt("Salario: "))
        object.idade = Number(prompt("Idade: "))
        object.sexo = prompt("Sexo (M or F): ")
        object.filhos = Number(prompt("Número de filhos: "))
        vet.push(object)
    }
    var maiorSalario = vet[0].salario
    for(let i = 0; i < 3; i++){
        tSalario += vet[i].salario
        tFilhos += vet[i].filhos
        if (maiorSalario < vet[i].salario){
            maiorSalario = vet[i].salario
        }
        if (vet[i].sexo == 'F'){
            if (vet[i].salario > 1000){
                mulherSalario =+ 1
            }
        }
    }
    var percMulher = mulherSalario/vet.length*100
    var mediaSalario = tSalario/vet.length
    var mediaFilho = tFilhos/vet.length
    alert("A media do salario da população é: "+mediaSalario.toFixed(2)+
        "\nA media do numero de filhos é: "+mediaFilho.toFixed(2)+
        "\nO maior salario é: R$"+maiorSalario.toFixed(2)+
        "\nE o percentual de mulheres com salario acima de R$1000,00 é: "+percMulher.toFixed(2)+"%.")
}

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