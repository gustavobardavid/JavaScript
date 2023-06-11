const inputBase = document.querySelector("#base");
const inputAltura = document.querySelector("#altura");

let botao = document.querySelector("button");

window.addEventListener("load" , () => {
  botao.addEventListener("click" , () => {
    let area = inputBase.value * inputAltura.value;
    let h1 = document.querySelector("h1");
    h1.textContent = area;
  })  
})