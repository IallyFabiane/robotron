const subtrair = document.getElementById("subtrair");
const somar = document.getElementById("somar");
const braco = document.getElementById("braco");
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
   elemento.addEventListener('click', (evento) => {
       manipulaDados(evento.target.textContent); //textContent é o mesmo que value do input
   })
});

function manipulaDados(operacao) {
    if (operacao === "-") {
        parseInt(braco.value--);
    } else if (operacao === "+") {
        parseInt(braco.value++);
    }
}
