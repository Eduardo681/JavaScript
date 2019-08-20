function exe01(){
    let vet = [], par = [], impar = [];
    let qtdPares = 0, qtdImpar = 0;
    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt("Number of the position "+i+ ":")))  
    }
    for(let i = 0; i < vet.length; i++){
        if(vet[i] % 2 == 0){
            par.push(vet[i])
            qtdPares += 1
        }
        else{
            impar.push(vet[i])
            qtdImpar += 1
        }
    }
    console.log("Vetor: "+vet)
    console.log("Pares: "+par+ "---"+qtdPares)
    console.log("Impares: "+impar+"---"+qtdImpar)
}
function exe02(){
    let vet = [], multi2 = []; multi3 = []; multiAmbos = []
    for(let i = 0; i < 7; i++){
        vet.push(Number(prompt("Number of the position: ")))
    }
    for(let i = 0; i < vet.length; i++){
        if(vet[i] % 2 == 0){
            multi2.push(vet[i])
        }
        if(vet[i] % 3 == 0){
            multi3.push(vet[i])
        }
        if(vet[i] % 2 == 0 && vet[i] % 3 == 0){
            multiAmbos.push(vet[i])
        }
    }
    console.log("2 -- "+multi2)
    console.log("3 -- "+multi3)
    console.log("2 and 3 -- "+multiAmbos)
}
function exe03(){
    let cod = [], estoque = [], codCli, qtdCom, codComp;
    for(let i = 0; i < 10; i++){
        cod.push(Number(prompt("Cod. of the product: ")))
        estoque.push(Number(prompt("The number of product: ")))
    }
    codCli = Number(prompt("Cod. of consumer: "))
    
    while(codCli != 0){
        codComp = Number(prompt("Cod. of sell: "))
        qtdCom = Number(prompt("Qtd of sell: "))
        varAux = cod.indexOf(codComp)
        if(varAux != -1){
           if(estoque[varAux] - qtdCom >= 0){
               alert("Buy complete!")
               estoque[varAux] = estoque[varAux] - qtdCom
           }
           else{
               alert("Not on lot!")
           }
        }
        else{
            alert("The product not exists!")
        }
        codCli = Number(prompt("Cod. of consumer: "))
    }
    console.log("Lot: "+ estoque)
}
function exe04(){
    let vet = [], vet30 = []
    for(let i = 0; i < 30; i++){
        vet.push(Number(prompt("Enter with any number: ")))
    }
    for(let i = 0; i < vet.length; i++){
        if(vet[i] == 30){
            vet30.push(i)
        }
    }
    console.log("Position of 30 -- "+vet30)
}
function exe05(){
    let prog = [], logic = [], proLog = []
    for(let i = 0; i < 15; i++){
        prog.push(Number(prompt("Cod. of programer: ")))
    }
    for(let i = 0; i < 10; i++){
        logic.push(Number(prompt("Cod. of logic: ")))
        if(prog.indexOf(logic[i]) != -1){
            proLog.push(logic[i])
        }
    }
    console.log("Pregramer and Logic: "+proLog)
}
function exe06(){
    let ven = [], com = [], tot = [], name = [], comTot = []
    for(let i = 0; i < 5; i++){
        name.push(prompt("Name: "))
        ven.push(Number(prompt("Sell: R$")))
        com.push(Number(prompt("Percent: ")))
        comTot.push(ven[i] * (com[i]/100))
        tot.push(ven[i] + (ven[i] * (com[i]/100)))
    }
    let maior = tot[0], menor = tot[0], nameMe = name[0], nameMa = name[0]
    for(let i = 0; i < 5; i++){
        if(maior < tot[i]){
            maior = tot[i]
            nameMa = name[i]
        }
        if(menor > tot[i]){
            menor = tot[i]
            nameMe = name[i]
        }
    }
    console.log("Names = "+name)
    console.log("Com.: "+comTot)
    console.log("Maior: "+nameMa+" -- R$"+maior)
    console.log("Menor: "+nameMe+" -- R$"+menor)
}
function exe07(){
    let vet = [], neg = [], pos = [], soma = 0
    for(let i = 0; i < 10; i++){
        vet.push(Number(prompt("Number: ")))
    }
    for(let i = 0; i < vet.length; i++){
        if(vet[i] < 0){
            neg.push(vet[i])
        }
        else{
            pos.push(vet[i])
            soma += vet[i]
        }
    }
    console.log("Negative: "+neg)
    console.log("Positive: "+pos)
    console.log("Sum of positives: "+soma)
}
function exe08(){
    alunos = [], media = []
    for(let i = 0; i < 7; i++){
        alunos.push(prompt("Name: "))
        media.push(Number(prompt("Media: ")))
    }
    maior = media[0]
    for(let i = 0; i < alunos.length; i++){
        if(maior <= media[i]){
            maior = media[i]
            var aux = i
        }
        if(media[i] < 7){
            let exame = 7-media[i]
            console.log(alunos[i]+ " is not aprovaded! More "+exame+" points")
        }
    }
    console.log(alunos[aux]+" is a major note")
}