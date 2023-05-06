window.addEventListener("load", () => {
    let botao = document.querySelector("button");
    botao.addEventListener("click", () => {
        let conjunto = document.querySelector("#conjunto").value;
        let separador = String(document.querySelector("#separador").value);
        let valores = conjunto.split(separador);
        let maior = 0;
        let menor = 9;
        valores.forEach(element => {
            if (element > maior) {
                maior = element;
            } 
            if (element < menor){
                menor = element;
            }
        });    
        const spanMenor = document.querySelector("#menor");
        spanMenor.textContent = menor;
        const spanMaior = document.querySelector("#maior");
        spanMaior.textContent = maior;
    })
})