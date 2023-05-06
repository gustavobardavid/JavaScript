    let botao = document.querySelector("button");
    botao.addEventListener("click", function gerarNumero(){
       let li = document.createElement("li");
       let numero = document.createTextNode(Math.floor(Math.random() *100));
       li.appendChild(numero);

       let ul = document.querySelector("ul");
       ul.appendChild(li);

    });
   
