//Desafio de rankeadas

function calculadora (vitorias,derrotas){
    let saldoVitorias = (vitorias - derrotas);
    let nivel = "";

    if(vitorias <10){
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias<=20){
        nivel = "Bronze";
    } else if (vitorias >20 && vitorias <=50){
        nivel = "Prata";
    } else if (vitorias >50 && vitorias <=80){
        nivel = "Ouro";
    } else if (vitorias >80 && vitorias <=90){
        nivel = "Diamante";
    } else if (vitorias >90 && vitorias <=100){
        nivel = "lendário";
    }else{
        nivel = "imortal";
    }
console.log(`O herói tem o saldo de ${saldoVitorias} e está no nivél ${nivel}`)
return nivel;
}
let vitorias = 15;
let derrotas = 1;
let resultado = calculadora(vitorias,derrotas);
