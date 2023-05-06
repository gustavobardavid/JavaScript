window.addEventListener("load" , () => {
    let arrayTarefa = [];
    let inputTarefa = document.querySelector("input");
    inputTarefa.addEventListener("keydown" , (event) => {
        if (event.key === "Enter"){
            arrayTarefa.push(inputTarefa.value);
            console.log(arrayTarefa);
            let li = document.createElement("li");
            let ul = document.querySelector("ul");
            li.textContent = inputTarefa.value;
            ul.appendChild(li);
            inputTarefa.value = "";
            let botao = document.createElement("button");
            li.appendChild(botao);
            botao.textContent = " x ";
            botao.addEventListener("keydown" , () => {
                ul.removeChild(li);
            })
        }
    })
})