window.addEventListener("load" , () => {
    
    let botao = document.querySelector("button");
    
    botao.addEventListener("click" , () => {
        let capital = Number(document.querySelector("#capital").value);
        let taxa = Number(document.querySelector("#taxa").value)/100;
        let tempo = Number(document.querySelector("#tempo").value);
        let montante = capital * Math.pow(taxa +1 , tempo);
        console.log(montante);
        let h1 = document.querySelector("h1");
        h1.textContent = montante;
    })
})