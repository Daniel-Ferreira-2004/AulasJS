const input = document.getElementById("taksInput");
const ul = document.getElementById("taksList");

function addTask() {
    if(input.value !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        console.log(li)

        const removerBotao = document.createElement("button");

        removerBotao.textContent = "Remover";

        removerBotao.onclick = function(){
            ul.removeChild(li);
        }

        ul.appendChild(li);
        li.appendChild(removerBotao);

        input.value = "";
    } else {
        alert ("Insira uma tarefa");
    }
    
}