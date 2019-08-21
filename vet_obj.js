function vet_obj(){
    var objeto = {}
    var vet = []
    var soma = 0
    for(var i = 0; i < 2; i++){
        objeto.codigo = Number(prompt("Digite o código: "))
        objeto.nome = prompt("Digite o nome: ")
        objeto.qtd = Number(prompt("Digite a quantidade: "))
        objeto.preco = Number(prompt("Digite o preço: "))
        vet.push(objeto)
        alert("Produto inserido com sucesso")
        soma = soma + vet[i].qtd;
    }
    
   
    alert(soma)
}