window.addEventListener("load", () => {
    let botao = document.querySelector("button");
    
    function fatorial(Number){
        if (Number === 1){
            return 1;
        }
        return Number * fatorial(Number-1);
    };
    
    botao.addEventListener("click" , () => {
        let numero = Number(document.querySelector("input").value);
        console.log(numero);
        let fator = fatorial(numero)   
        console.log(fator);
        let h1 = document.querySelector("h1");
        h1.textContent = fator; 
    })
}) 