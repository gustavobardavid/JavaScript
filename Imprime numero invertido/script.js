const input = document.querySelector("input");
let botao = document.querySelector("button");
let array = []
window.addEventListener("load", ()=> {
    botao.addEventListener("click", () => {
        let entrada = input.value;
        console.log(entrada.split(''));
        let entradaInvertida = entrada.split('').reverse();
        console.log(entradaInvertida.join(''));
        let h1 = document.querySelector("h1");
        h1.textContent = entradaInvertida.join('');
    })
})