const robotron = document.querySelector("#robotron");
const subtrair = document.getElementById("subtrair");
const somar = document.getElementById("somar");
const braco = document.getElementById("braco");

robotron.addEventListener('click', dizOi('Ially'));
somar.addEventListener('click', () => {
   parseInt(braco.value++);
})
subtrair.addEventListener('click', () => {
    parseInt(braco.value--);
 })

function dizOi(nome) {
    console.log(nome + " bem-vinda ao Robotron 2000")
}

