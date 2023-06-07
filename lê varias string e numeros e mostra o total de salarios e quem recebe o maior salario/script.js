window.addEventListener("load" , () => {
    let botao = document.querySelector("button");
    let arrayPessoa = [];
    let posicao = 0 ;
    let acumulador = 0;
    let maior = 0;
    botao.addEventListener("click" , () => {
        let campoNome = String(document.querySelector("#nome").value);
        let campoSalario = Number(document.querySelector("#salario").value);
        let spanMaior = document.getElementById("maior-salario");
        
        const objeto = {
            "nome" : campoNome,
            "salario" : campoSalario,
        };
        arrayPessoa.push(objeto);
        console.log(arrayPessoa)
        let li = document.createElement("li");
        let ul = document.querySelector("ul");
        li.textContent = `${arrayPessoa[posicao].nome}`;
        ul.appendChild(li);
        let totalSalario = arrayPessoa.reduce((acumulador, objeto) => {
            return acumulador + objeto.salario;
        }, 0 );
        console.log(totalSalario);
        let spanTotal = document.querySelector("#total-salarios");
        spanTotal.textContent = totalSalario;
        let maiorSalario = arrayPessoa.forEach(objeto => {
            if (objeto.salario > maior){
                maior = objeto.salario;
                console.log(objeto.nome);
                spanMaior.textContent = `${objeto.nome}`;

            }
        });
        console.log(maior);
        posicao++;
    })
})