function resolver() {
    let tabelas = Number(prompt("Quantidade de tabelas: "));
    let vet = [];
    let FPB = [];
    let somaFPB = 0;
    for (let i = 0; i < tabelas; i++) {
        vet.push(Number(prompt("Número de dados relacionados: ")))
    }
    entrada(vet, FPB)
    saida(vet, FPB)
    consulta(vet, FPB)
    arquivo(vet, FPB)
    interface(vet, FPB)
    FPB.forEach(item => somaFPB += item)
    let linguagem = Number(prompt(`Linguagem utilizada (digite o numero correspondente):
1 - Cobol.
2 - Pascal.
3 - C++.
4 - Java/Delphi/Visual Basic
5 - Sql/HTML`))
    let sistema = Number(prompt(`Tipo de sistema (digite o numero correspondente):
1 - Sistema Comercial.
2 - Comercio eletronico.
3 - WEB`))
    let valorHora = Number(prompt('Valor hora: R$'))
    let c = custo(somaFPB, linguagem, sistema, valorHora)
    let p = prazo(somaFPB, linguagem, sistema)
    alert(`O custo será de R$${c.toFixed(2)}
E o prazo ${p}`)
}


function entrada(x, y) {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let simples = 0;
    let medio = 0;
    let complexo = 0;
    x.forEach(item => {
        item > 0 && item <= 4 ? faixa1++ : false;
        item > 4 && item <= 15 ? faixa2++ : false;
        item > 15 ? faixa3++ : false;
    });
    faixa1 <= 2 ? simples += faixa1 : false;
    faixa1 >= 3 ? medio += faixa1 : false;
    faixa2 == 1 ? simples += faixa2 : false;
    faixa2 == 2 ? medio += faixa2 : false;
    faixa2 >= 3 ? complexo += faixa2 : false;
    faixa3 == 1 ? medio += faixa3 : false;
    faixa3 >= 2 ? complexo += faixa3 : false;
    y.push(simples * 3);
    y.push(medio * 4);
    y.push(complexo * 6);
}
function saida(x, y) {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let simples = 0;
    let medio = 0;
    let complexo = 0;
    let g = 0;
    x.forEach(item => {
        item > 0 && item <= 5 ? faixa1++ : false;
        item > 5 && item <= 19 ? faixa2++ : false;
        item > 19 ? faixa3++ : false;
    });
    x.forEach(item => g += item)
    g > 0 && g <= 5 ? faixa1++ : false;
    g > 5 && g <= 19 ? faixa2++ : false;
    g > 19 ? faixa3++ : false;
    faixa1 <= 3 ? simples += faixa1 : false;
    faixa1 >= 4 ? medio += faixa1 : false;
    faixa2 == 1 ? simples += faixa2 : false;
    faixa2 >= 2 && faixa2 <= 3 ? medio += faixa2 : false;
    faixa2 >= 4 ? complexo += faixa2 : false;
    faixa3 == 1 ? medio += faixa3 : false;
    faixa3 >= 2 ? complexo += faixa3 : false;
    y.push(simples * 4);
    y.push(medio * 5);
    y.push(complexo * 7);
}
function consulta(x, y) {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let simples = 0;
    let medio = 0;
    let complexo = 0;
    let g = 0;
    x.forEach(item => {
        item > 0 && item <= 4 ? faixa1++ : false;
        item > 4 && item <= 15 ? faixa2++ : false;
        item > 15 ? faixa3++ : false;
    });
    x.forEach(item => g += item)
    g > 0 && g <= 4 ? faixa1++ : false;
    g > 4 && g <= 15 ? faixa2++ : false;
    g > 15 ? faixa3++ : false;
    faixa1 < 3 ? simples += faixa1 : false;
    faixa1 >= 3 ? medio += faixa1 : false;
    faixa2 == 1 ? simples += faixa2 : false;
    faixa2 == 2 ? medio += faixa2 : false;
    faixa2 >= 3 ? complexo += faixa2 : false;
    faixa3 == 1 ? medio += faixa3 : false;
    faixa3 >= 2 ? complexo += faixa3 : false;
    y.push(simples * 3);
    y.push(medio * 4);
    y.push(complexo * 6);
}
function arquivo(x, y) {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let simples = 0;
    let medio = 0;
    let complexo = 0;
    x.forEach(item => {
        item > 0 && item <= 19 ? faixa1++ : false;
        item > 19 && item <= 50 ? faixa2++ : false;
        item > 50 ? faixa3++ : false;
    });
    faixa1 <= 5 ? simples += faixa1 : false;
    faixa1 >= 6 ? medio += faixa1 : false;
    faixa2 == 1 ? simples += faixa2 : false;
    faixa2 >= 2 && faixa2 <= 5 ? medio += faixa2 : false;
    faixa2 >= 6 ? complexo += faixa2 : false;
    faixa3 == 1 ? medio += faixa3 : false;
    faixa3 >= 2 ? complexo += faixa3 : false;
    y.push(simples * 7);
    y.push(medio * 10);
    y.push(complexo * 15);
}
function interface(x, y) {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let simples = 0;
    let medio = 0;
    let complexo = 0;
    let g = 0;
    x.forEach(item => {
        item > 0 && item <= 19 ? faixa1++ : false;
        item > 19 && item <= 50 ? faixa2++ : false;
        item > 50 ? faixa3++ : false;
    });
    x.forEach(item => g += item)
    g > 0 && g <= 19 ? faixa1++ : false;
    g > 19 && g <= 50 ? faixa2++ : false;
    g > 50 ? faixa3++ : false;
    faixa1 <= 5 ? simples += faixa1 : false;
    faixa1 >= 6 ? medio += faixa1 : false;
    faixa2 == 1 ? simples += faixa2 : false;
    faixa2 >= 2 && faixa2 <= 5 ? medio += faixa2 : false;
    faixa2 >= 6 ? complexo += faixa2 : false;
    faixa3 == 1 ? medio += faixa3 : false;
    faixa3 >= 2 ? complexo += faixa3 : false;
    y.push(simples * 5);
    y.push(medio * 7);
    y.push(complexo * 10);
}
function custo(somaFPB, linguagem, sistema, vh) {
    let FPBL = Math.round(somaFPB * 1.35);
    let valorLinguagem = 0;
    let prod = 0;
    linguagem == 1 ? valorLinguagem = 100 : false;
    linguagem == 2 ? valorLinguagem = 90 : false;
    linguagem == 3 ? valorLinguagem = 30 : false;
    linguagem == 4 ? valorLinguagem = 20 : false;
    linguagem == 5 ? valorLinguagem = 15 : false;
    sistema == 1 ? prod = 2500 : false;
    sistema == 2 ? prod = 3600 : false;
    sistema == 3 ? prod = 3300 : false;
    let t = FPBL * valorLinguagem / prod;
    let custo = 132 * casasDecimais(t,2) * vh;
    return custo;
}
function prazo(somaFPB, linguagem, sistema) {
    let FPBL = Math.round(somaFPB * 1.35);
    let valorLinguagem = 0;
    let prod = 0;
    let msg = '';
    linguagem == 1 ? valorLinguagem = 100 : false;
    linguagem == 2 ? valorLinguagem = 90 : false;
    linguagem == 3 ? valorLinguagem = 30 : false;
    linguagem == 4 ? valorLinguagem = 20 : false;
    linguagem == 5 ? valorLinguagem = 15 : false;
    sistema == 1 ? prod = 2500 : false;
    sistema == 2 ? prod = 3600 : false;
    sistema == 3 ? prod = 3300 : false;
    let t = FPBL * valorLinguagem / prod;
    let meses = Math.trunc(t);
    let dias = (casasDecimais(t,2) - meses) * 22;
    let dia = Math.trunc(dias);
    let horas = (casasDecimais(dias,2) - dia)* 6;
    let hora = Math.trunc(horas);
    let min1 = (casasDecimais(horas,2) - hora) * 60;
    let min = Math.floor(min1)
    msg = `${meses} meses,${dia} dias,${hora} horas e ${min} minutos`;
    return msg;
}


function casasDecimais(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};