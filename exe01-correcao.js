var b = document.querySelector("button")
b.addEventListener('click',vet1)
function vet1(){
    var mensagem = ("Menu de escolhas:"+
    "\n1- Cadastrar vendedor"+
    "\n2- Cadastrar venda"+
    "\n3 - Consultar o total das vendas de um funcionario em um determinado mês"+
    "\n4- Consultar o total das vendas de determinado vendedor"+
    "\n5 - Mostrar o numero do vendedor que mais vendeu em determinado mes"+
    "\n6 - Mostrar o número do mes com mais vendas"+
    "\n7 - Finalizar o programa"+
    "\nOpção: ")
    var opção;
    var vendas = [],vendedores = []
    var objeto = {}
    do{
        opcao = Number(prompt(mensagem))
        switch(opcao){
            case 1:
                cadastraVendedor(vendedores);
                break;
            case 2:
                cadastraVenda(vendedores, vendas);
                break;
            case 3:
                consultaVendas(vendedores, vendas);
                break;
            case 4:
                consultaTotalVendas(vendedores, vendas);
                break;
            case 5:
                calculaMaisVendeu(vendas);
                break;
            case 6:
                calculaMaisVendeu(vendas);
                break;
            case 7:
                alert("Obrigado por usar esse programa!");
                break;
            default: 
                alert("Opção invalida!");
        }
    } while(opcao != 7);
}



function cadastraVendedor(vendedores){
    var objeto = {}
    objeto.codigo = Number(prompt("Codigo: "))
    objeto.nome = prompt("Nome: ")
    vendedores.push(objeto)
    
}
function cadastraVenda(){
    var objeto = {}
    var colar = cola(vendedores)
    objeto.codigo = Number(prompt("Codigo do funcionario: \n"+cola))
    objeto.mes = Number(prompt("Mês: "))
    objeto.valor = Number(prompt("Valor: "))
    vendas.push(objeto)
}
function consultaVendas(){
    var colar = cola(vendedores)
    var cod = Number(prompt("Codigo: \n"+cola))
    var mes = Number(prompt("Mês: "))
    for(var i =0;i < vendas.length; i++){
        if((vendas[i].codigo == cod)&&(vendas[i].mes == mes)){
            alert(vendas[i].valor)
            break;
        }
    }
    if( i == vendas.length){
        alert("Venda não existe")
    }
}
function consultaTotalVendas(){
    var colar = cola(vendedores)
    var cod = Number(prompt("Informe o codigo: \n"+ cola));
    var soma = 0;
    for(var i = 0;i < vendas.length;i++){
        if(vendas[i].codigo == cod){
            soma += vendas[i].valor;
        }
    }
    alert("A soma das vendas é "+soma);
}
function calculaMaisVendeu(){
    var mes = Number(prompt("Mês: "));
    var maior = 0;
    var codMaior = 0;
    for(var i = 0; i < vendas.length;i++){
        if(vendas[i].mes == mes){
            if(maior < vendas[i].valor){
                maior = vendas[i].valor;
                codMaior = vendas[i].codigo;
            }
        }
    }
    alert("O vendedor que vendeu mais neste mês foi "+codMaior);
}
function calculaMesMaisVendeu(){
    var maior = 0;
    var mesMaior = 0;
    var meses = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    for(var i = 0;i < vendas.length; i++){
        meses[vendas[i].mes-1] += vendas[i].valor;
    }
    for(var i = 0; i < meses.length;i++){
        if(meses[i] > maior){
            maior = meses[i];
            mesMaior = i + 1;
        }
    }
    alert(mesMaior)
}

function cola(vendedores){
    var cola = ''; 
    for(var i = 0;i < vendedores.length;i++){
        cola = cola + vendedores[i].codigo +"---"+ vendedores[i].nome + ".\n"
    }
    return cola;
}