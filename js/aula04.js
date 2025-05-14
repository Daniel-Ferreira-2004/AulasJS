(function () {
    const isNode = typeof window === "undefined";

    let promptFn, alertFn;

    if (isNode) {
        // Node.js: usar prompt-sync
        try {
            const promptSync = require('prompt-sync')();
            promptFn = promptSync;
            alertFn = console.log;
        } catch (e) {
            console.error("Erro: instale prompt-sync com 'npm install prompt-sync'");
            process.exit(1);
        }
    } else {
        // Navegador
        promptFn = prompt;
        alertFn = alert;
    }
    

    nome = 'Igor'; //Criamos uma variável tipo String para guardar o nome do usuário
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

    let escolha = Number(promptFn(`Digite um numero e escolha um pais para saber sua Capital:
1 - Brasil; 2 - Canada; 3 - Italia; 4 - Suiça; 5 - EUA;`));
    console.log(escolha)
    let escolhaUser = escolha;

    if (escolhaUser == 1) {
        alertFn(`A capital do pais Brasil é Brasilia`);
    } else if (escolhaUser == 2) {
        alertFn(`A capital do pais Canada é Ottawa`);
    } else if (escolhaUser == 3) {
        alertFn(`A capital do pais Italia é roma`);
    } else if (escolhaUser == 4) {
        alertFn(`A capital do pais Suiça é Berna`);
    } else if (escolhaUser == 5) {
        alertFn(`A capital do pais EUA é Washington`);
    } else {
        alertFn("Nenhuma escolha foi selecionada :( ");
    };

    // tipos de dados Bancarios
    let escolhaBanco = Number(promptFn(`Escolha um banco :
Santander(1) Caixa(2) Itau(3) NU(4) Inter(5)`));
    let tipoBanco = Number(promptFn("Escolha o tipo de banco: Corrente(1) Poupança(2)"));
    let tipoCartao = Number(promptFn("Escolha o tipo de Cartão: Credito(1) Debito(2) Os dois (3)"));

    switch (escolhaBanco) {

        case 1:
            casoBanco = `Santander`;
            break;

        case 2:
            casoBanco = "Caixa";
            break;

        case 3:
            casoBanco = `Itau`;
            break;

        case 4:
            casoBanco = "NU";
            break;

        case 5:
            casoBanco = `Inter`;
            break;

        default:
            casoBanco = "Nenhum";
            break;
    }

    switch (tipoBanco) {

        case 1:
            casoTipo = `Corrente`;
            break;

        case 2:
            casoTipo = "Poupança";
            break;

        default:
            casoTipo = "Nenhum";
            break;
    }

    switch (tipoCartao) {

        case 1:
            casoCartao = ` Credito`;
            break;

        case 2:
            casoCartao = "Debito";
            break;

        case 3:
            casoCartao = " Credito e Debito";
            break;


        default:
            casoCartao = "Nenhum";
            break;
    }

    alertFn(`Voce escolheu o banco ${casoBanco}, com uma conta ${casoTipo} e com cartão ${casoCartao}.`);

    //renda familiar//

    let rendaFamiliar = 1550;
    let salarioMinimo = 1500;

    if (rendaFamiliar < salarioMinimo) {
        alertFn('Pobre Miseravel')
    } else {
        alertFn("Não vai morrer de fome")
    }

})();

