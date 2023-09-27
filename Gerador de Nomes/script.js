

window.addEventListener('load' , ()=> {

// Listas de partes de nomes
const nomes = ["Ana", "João", "Maria", "Carlos", "Julia", "Nayara", "Roberta", "Maria", "Gustavo", "Aluchan"];
const sobrenomes = ["Silva", "Santos", "Oliveira", "Ferreira", "Pereira", "Silva", "Tavares", "Sousa", "Soares"];

//Rastreando elementos
const nomeGeradoElement = document.querySelector("#nomeGerado");
const gerarNomeButton = document.querySelector("#gerarNome");
const content = document.querySelector("#content");
const copiarNomeButton = document.createElement("button");
copiarNomeButton.textContent = "Copiar"
content.appendChild(copiarNomeButton);

// Função para gerar um nome aleatório
function gerarNomeAleatorio() {
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenomeAleatorio = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return `${nomeAleatorio} ${sobrenomeAleatorio}`;
}

gerarNomeButton.addEventListener("click", () => {
    
    const nomeGerado = gerarNomeAleatorio();
    nomeGeradoElement.textContent = nomeGerado;
    
    //botão dentro do evento gerar para que não ocorra do usuario copiar o campo vazio
    copiarNomeButton.addEventListener("click", () => {
        const nomeParaCopiar = nomeGeradoElement.textContent;
        const inputElement = document.createElement("input");
        inputElement.value = nomeParaCopiar;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand("copy");
        document.body.removeChild(inputElement);
        alert("Nome copiado para a área de transferência: " + nomeParaCopiar);
    });

});
})