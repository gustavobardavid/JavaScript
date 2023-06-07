window.addEventListener("load", () => {
    let botao = document.querySelector("button");
    botao.addEventListener("click", () => {
        let k;
        let count1 = 0,count2 = 0,count3 = 0,count4 = 0,count5 = 0,count6 = 0;
        for (k=0;k<1000000;k++){
            let dado = Math.ceil(Math.random () * 6);
            if (dado == 1){
                count1++;
            }
            if (dado == 2) {
                count2++;
            }
            if(dado == 3){
                count3++;
            }
            if(dado == 4){
                count4++;
            }
            if( dado == 5){
                count5++;
            }
            if (dado == 6){
                count6++;
            }
        }
        
        const count1span = document.querySelector("#count-1");
        count1span.textContent = count1;
        const count2span = document.querySelector("#count-2");
        count2span.textContent = count2;
        const count3span = document.querySelector("#count-3");
        count3span.textContent = count3;
        const count4span = document.querySelector("#count-4");
        count4span.textContent = count4;
        const count5span = document.querySelector("#count-5");
        count5span.textContent = count5;
        const count6span = document.querySelector("#count-6");
        count6span.textContent = count6;

        
    })
})