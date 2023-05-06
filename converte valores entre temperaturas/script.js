let fahrenheit = (celsius) => celsius * 1.8 + 32;
let kelvin = (celsius) => celsius + 273;
window.addEventListener("load", () => {
    let input = document.querySelector("input");
    input.addEventListener("keyup", () => {
        let celsius = Number(document.querySelector("input").value);
        let tempfahrenheit = document.querySelector("#temp-fahrenheit");
        let tempkelvin = document.querySelector("#temp-kelvin");
        const valor_fahrenheit = fahrenheit(celsius);
        const valor_kelvin = kelvin (celsius);
        tempfahrenheit.textContent = valor_fahrenheit;
        tempkelvin.textContent = valor_kelvin;
        })

});