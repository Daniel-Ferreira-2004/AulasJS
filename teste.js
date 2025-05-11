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

    let banco = "Santander(1) Caixa(2) Itau(3) NU(4) Inter(5)";
    let escolhaBanco = Number(promptFn(`Escolha um banco:\n${banco}`));
    let tipoBanco = Number(promptFn("Escolha o tipo de banco: Corrente(1) Poupança(2)"));
    let tipoCartao = Number(promptFn("Escolha o tipo de Cartão: Crédito(1) Débito(2) Os dois (3)"));

    let casoBanco, casoTipo, casoCartao;

    switch (escolhaBanco) {
        case 1: casoBanco = "Santander"; break;
        case 2: casoBanco = "Caixa"; break;
        case 3: casoBanco = "Itau"; break;
        case 4: casoBanco = "NU"; break;
        case 5: casoBanco = "Inter"; break;
        default: casoBanco = "Nenhum"; break;
    }

    switch (tipoBanco) {
        case 1: casoTipo = "Corrente"; break;
        case 2: casoTipo = "Poupança"; break;
        default: casoTipo = "Nenhum"; break;
    }

    switch (tipoCartao) {
        case 1: casoCartao = "Crédito"; break;
        case 2: casoCartao = "Débito"; break;
        case 3: casoCartao = "Crédito e Débito"; break;
        default: casoCartao = "Nenhum"; break;
    }

    alertFn(`Você escolheu o banco ${casoBanco}, com uma conta ${casoTipo} e com cartão ${casoCartao}.`);
})();