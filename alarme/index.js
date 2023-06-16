window.addEventListener("load" , () => {
    let botao = document.querySelector("button");
    let statusAlarme = document.querySelector("#status");
    botao.addEventListener("click" , () => {
        let inputHora = document.querySelector("#hora").value;
        let inputMsg = document.querySelector("#msg").value;
        definirAlarme(inputHora, inputMsg);
    })

    function definirAlarme (hora, mensagem) {
        const [horas, minutos] = hora.split(':');
        const agora = new Date();
        const alarme = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate(), horas, minutos);

        if (alarme > agora) {
            const alarmeDiferença = alarme - agora;
            setTimeout(() => {
                tocarAlarme(mensagem);
            }, alarmeDiferença);
            
            statusAlarme.textContent = `Alarme definido para ${hora}`;

        } else {
            statusAlarme.textContent = `Horário inválido. Por favor, informe um horário válido`;
        }
    }

    function tocarAlarme (mensagem) {
        alert(mensagem);
        statusAlarme.textContent = `Alarme zerado`;
        inputHora.textContent = '';
        inputMsg.textContent = ''; 
    }
})