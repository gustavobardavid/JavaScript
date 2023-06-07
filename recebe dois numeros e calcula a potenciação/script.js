window.addEventListener("load",function (){
    let botao = document.querySelector("button");
    botao.addEventListener("click", function (){
        let base = document.querySelector("#base");
        let baseDigitado = base.value;
        let expoente = document.querySelector("#expoente");
        let expoenteDigitado = expoente.value;
        let x = 7; 
        let y = 2;

        let div = document.querySelector("div");
        const calcularPotencia = (baseDigitado, expoenteDigitado) => {Math.pow(baseDigitado, expoenteDigitado)};

        let potenciaCalculada = document.createElement("p");
        potenciaCalculada.textContent = calcularPotencia;
        div.appendChild(potenciaCalculada);
        base.value = "";
        expoente.value = "";

    })

    }
)