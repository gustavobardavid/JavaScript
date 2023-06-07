const lista = document.querySelector("ul");

const input = document.querySelector("input");

window.addEventListener("load" , () => {
    
    mostrarFilmes(filmes);
    
    input.addEventListener("keyup",() => {
        const filmesFiltrados = filtrarFilmes(input.value);
        mostrarFilmes(filmesFiltrados);
    })
    
})    

function filtrarFilmes (texto) {
    return filmes.filter ((filmes) => filmes.titulo.includes(texto))
}

const filmes = [
    { titulo: "O Poderoso Chefão", ano: 1972, diretor: "Francis Ford Coppola" },
    { titulo: "Um Sonho de Liberdade", ano: 1994, diretor: "Frank Darabont" },
    { titulo: "O Senhor dos Anéis: O Retorno do Rei", ano: 2003, diretor: "Peter Jackson" },
    { titulo: "Pulp Fiction: Tempo de Violência", ano: 1994, diretor: "Quentin Tarantino" },
    { titulo: "Forrest Gump: O Contador de Histórias", ano: 1994, diretor: "Robert Zemeckis" },
    { titulo: "A Origem", ano: 2010, diretor: "Christopher Nolan" },
    { titulo: "O Iluminado", ano: 1980, diretor: "Stanley Kubrick" },
    { titulo: "Matrix", ano: 1999, diretor: "The Wachowskis" },
    { titulo: "Jurassic Park: Parque dos Dinossauros", ano: 1993, diretor: "Steven Spielberg" },
    { titulo: "Clube da Luta", ano: 1999, diretor: "David Fincher" },
    { titulo: "De Volta para o Futuro", ano: 1985, diretor: "Robert Zemeckis" },
    { titulo: "Cidade de Deus", ano: 2002, diretor: "Fernando Meirelles" },
    { titulo: "Blade Runner: O Caçador de Andróides", ano: 1982, diretor: "Ridley Scott" },
    { titulo: "Interestelar", ano: 2014, diretor: "Christopher Nolan" },
        { titulo: "O Fabuloso Destino de Amélie Poulain", ano: 2001, diretor: "Jean-Pierre Jeunet" }
      ];
      
    function mostrarFilmes (filmes){
        lista.replaceChildren(...[]);
        filmes.forEach(filmes => {
            let novoitemlista = document.createElement("li");
            novoitemlista.textContent = `Titulo: ${filmes.titulo} Ano: ${filmes.ano} Diretor: ${filmes.diretor}`;
            lista.appendChild(novoitemlista); 
        })};
        