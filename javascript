const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

function atualizarRelogio() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Adiciona zero à esquerda se for menor que 10
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
}

// Atualizar a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez para inicializar o relógio imediatamente
atualizarRelogio();