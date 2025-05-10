var nome = 'Igor'; //Criamos uma variável tipo String para guardar o nome do usuário
var idade = 24; //Criamos uma variável tipo number para guardar a idade do usuário

var mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos de idade`; //Criamos uma variável chamada mensagem para exibir o texto contendo as duas variáveis que foram declaradas
console.log(mensagem); //Criamos o Console.log para fazer a impressão da variável "mensagem".


//criem uma mensagem para informar profissão e salário de um Trabalhador
var profissao = "professor";
let salario = 5046
let retornoSalario = `A profissão dele é ${profissao} e ele recebe ao mês ${salario} reais`;
console.log(retornoSalario);


//criem uma mensagem para informar raça e idade de um cachorro

let raca = "Bruno";
let idadeCachorro = "-1";
let cachorro = `A idade do cachorro sarnento podre ${raca}, é de ${idadeCachorro} anos`;
console.log(cachorro);

//Bloco paises//


let opcoes = "1 - Brasil; 2 - Canada; 3 - Italia; 4 - Suiça; 5 - EUA;";
let escolha = prompt(`Digite um numero e escolha um pais para saber sua Capital:;
${opcoes}`);
let escolhaUser = escolha;

if (escolhaUser == 1) {
    alert(`A capital do pais Brasil é Brasilia`);
} else if (escolhaUser == 2) {
    alert (`A capital do pais Canada é Ottawa`);
} else if (escolhaUser == 3) {
    alert(`A capital do pais Italia é roma`);
} else if (escolhaUser == 4) {
    alert (`A capital do pais Suiça é Berna`);
} else if (escolhaUser == 5) {
    alert (`A capital do pais EUA é Washington`);
} else {
    alert ("Nenhuma escolha foi selecionada :( ");
};

// tipos de dados Bancarios
let banco = "Santander(1) Caixa(2) Itau(3) NU(4) Inter(5)";
let escolhaBanco = prompt(`Escolha um banco :
${banco}`);
let tipoBanco = prompt("Escolha o tipo de banco: Corrente(1) Poupança(2)");
let tipoCartao = prompt("Escolha o tipo de Cartão: Credito(1) Debito(2) Os dois (3)");

switch(escolhaBanco) {

    case 1: 
        casoBanco = `Voce escolheu o banco Santander`;
        break;
    
    case 2:
        casoBanco = "Voce escolheu o banco Caixa";
        break;

    case 3: 
        casoBanco = `Voce escolheu o banco Itau`;
        break;
    
    case 4:
        casoBanco = "Voce escolheu o banco NU";
        break;

    case 5: 
        casoBanco = `Voce escolheu o banco Inter`;
        break;
    
    default:
        casoBanco = "Voce não escolheu um Banco";
        break;
}

switch(tipoBanco) {
    
    case 1: 
        casoTipo = `Voce escolheu a conta Corrente`;
        break;
    
    case 2:
        casoTipo = "Voce escolheu a conta Poupança";
        break;
    
    default:
        casoTipo = "Voce não escolheu uma conta";
        break;
}

switch(tipoCartao) {
    
    case 1: 
        casoCartao = `Voce escolheu o cartão de Credito`;
        break;
    
    case 2:
        casoCartao = "Voce escolheu o cartão de Debito";
        break;

    case 2:
        casoCartao = "Voce escolheu o cartão de Credito e Debito";
        break;
        
    
    default:
        casoTipo = "Voce não escolheu um Cartão";
        break;
}

alert(`Voce escolheu o banco ${casoBanco}, com uma conta ${casoTipo} e com cartão ${casoCartao}.`)
