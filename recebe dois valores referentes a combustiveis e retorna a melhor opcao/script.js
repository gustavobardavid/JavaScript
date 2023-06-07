window.addEventListener("load", () => {
    let botao = document.querySelector("button");
    botao.addEventListener("click", () => {
      let gasolina = Number(document.querySelector("#gasolina").value);
      let alcool = Number(document.querySelector("#alcool").value);
      let resultado = gasolina * 0.7 > alcool ? 1 : 0;
      if (resultado === 0) {
        alert("Gasolina é melhor");
      } else {
        alert("Alcool é melhor");
      }
    });
  });
  