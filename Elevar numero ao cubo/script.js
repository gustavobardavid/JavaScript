let input = document.querySelector("input");
window.addEventListener("load" , () => {
    input.addEventListener("keyup" , (event) => {
        let cubo = Math.pow(event.target.value,3);
        let p = document.createElement("p");
        p.textContent = cubo;
        let div = document.querySelector("div");
        div.appendChild(p);
    })
})