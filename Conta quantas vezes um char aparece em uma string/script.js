window.addEventListener("load" , () => {
    let botao = document.querySelector("button");
    botao.addEventListener("click" , () => {
        let cont = 0 ;
        let palavra = document.querySelector("#palavra").value;
        let char = document.querySelector("#char").value;
        let arrayPalavra = palavra.split('');
        let aparece = arrayPalavra.forEach(element => {
            if(element.includes(char)){
                cont++;
            }
        });
        console.log(cont);
        let h1 = document.querySelector("h1");
        h1.textContent = cont;
    })
})