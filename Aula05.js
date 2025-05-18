let list = [12, 34, 68, 556, 2, 4, 67, 8, 97, 45, 2, 8, 7, 1, 99, 2, 3, 15, 33, 6];

function validaList(lista) {
    let ListComplet = [];
    let ListValid = [];

    // Passo 1: apenas ímpares
    lista.forEach(num => {
        if (num % 2 !== 0) {
            ListComplet.push(num);
        }
    });

    // Passo 2: divisíveis por 3 OU 5, mas NÃO pelos dois ao mesmo tempo
    ListValid = ListComplet.filter(num => {
        const div3 = num % 3 === 0;
        const div5 = num % 5 === 0;
        return (div3 || div5) && !(div3 && div5);
    });

    return ListValid;
}

console.log(validaList(list));