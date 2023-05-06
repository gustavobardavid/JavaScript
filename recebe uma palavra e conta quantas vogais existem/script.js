window.addEventListener("load" , () => {
    let botao = document.querySelector("button");
    botao.addEventListener("click" , () => {
        let cont = 0; 
        let palavra = document.querySelector("input").value.split('');
        console.log(palavra);
        palavra.forEach( (element) => {
            if (element.includes('a')||element.includes('e')||element.includes('i')||element.includes
            ('o')||element.includes('u')){
                cont ++; 
            }
        })
        let h1 = document.querySelector("h1");
        h1.textContent = cont;
        console.log(cont);

    })
})