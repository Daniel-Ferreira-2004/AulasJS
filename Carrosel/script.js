const options = {
    strings: [
        "Bem-vindo ao Obra Social Dom Bosco",
        "Desenvolvimento Front-end",
        "Desenvolvimento Back-end",
        "Cadastre-se aqui !"
    ],

    typeSpeed: 50, //Velocidade da digitação
    backSpeed: 40, //Velocidade em apagar texto
    loop: true, //Faz com que as frases se repitam indefinidamente
    backDelay: 100, //Tempo de espera anres de começar a apagar uma frase
    smartBckspace: true //Otimiza o apagamento: apaga apenas os caracteres diferentes da próxima frase
}
//Cria uma nova instacia do Typed.js
//#Typed é o seletor do elemento HTML onde o texto será digitado
//options é o objeto com as configurações acima

new Typed("#typed", options);
console.log (options)