window.addEventListener("load", () => {
    let botao = document.querySelector("button");
    
    int factorial(int number) {
        if (number == 1) {
            return 1;
        }
        return number * factorial(number - 1);
    }
    
    botao.addEventListener("click" , () => {
        let numero = Number(document.querySelector("input").value);
        console.log(numero);
        let fator = fatorial(numero)   
        console.log(fator);
        let h1 = document.querySelector("h1");
        h1.textContent = fator; 
    })
}) 