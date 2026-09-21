const container = document.getElementById('animaciones-container');
const carta = document.querySelector('.contenedor');

const svgRamillo = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 60 L 40 90 M50 60 L 60 90 M50 60 L 50 90" stroke="#228b22" stroke-width="4"/><circle cx="40" cy="40" r="12" fill="#fff" stroke="#eee" stroke-width="2"/><circle cx="60" cy="40" r="12" fill="#fff" stroke="#eee" stroke-width="2"/><circle cx="50" cy="55" r="12" fill="#fff" stroke="#eee" stroke-width="2"/><circle cx="30" cy="50" r="12" fill="#fff" stroke="#eee" stroke-width="2"/><circle cx="70" cy="50" r="12" fill="#fff" stroke="#eee" stroke-width="2"/></svg>';

const svgGirasolRamo = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 50 L 50 90 M50 60 L 25 90 M50 60 L 75 90" stroke="#228b22" stroke-width="4"/><g transform="translate(0, -10)"><circle cx="50" cy="25" r="10" fill="#ffd700"/><circle cx="50" cy="55" r="10" fill="#ffd700"/><circle cx="35" cy="40" r="10" fill="#ffd700"/><circle cx="65" cy="40" r="10" fill="#ffd700"/><circle cx="39" cy="29" r="10" fill="#ffd700"/><circle cx="61" cy="29" r="10" fill="#ffd700"/><circle cx="39" cy="51" r="10" fill="#ffd700"/><circle cx="61" cy="51" r="10" fill="#ffd700"/><circle cx="50" cy="40" r="12" fill="#5c4033"/></g><g transform="translate(-25, 10) scale(0.8)"><circle cx="50" cy="25" r="10" fill="#ffd700"/><circle cx="50" cy="55" r="10" fill="#ffd700"/><circle cx="35" cy="40" r="10" fill="#ffd700"/><circle cx="65" cy="40" r="10" fill="#ffd700"/><circle cx="39" cy="29" r="10" fill="#ffd700"/><circle cx="61" cy="29" r="10" fill="#ffd700"/><circle cx="39" cy="51" r="10" fill="#ffd700"/><circle cx="61" cy="51" r="10" fill="#ffd700"/><circle cx="50" cy="40" r="12" fill="#5c4033"/></g><g transform="translate(25, 10) scale(0.8)"><circle cx="50" cy="25" r="10" fill="#ffd700"/><circle cx="50" cy="55" r="10" fill="#ffd700"/><circle cx="35" cy="40" r="10" fill="#ffd700"/><circle cx="65" cy="40" r="10" fill="#ffd700"/><circle cx="39" cy="29" r="10" fill="#ffd700"/><circle cx="61" cy="29" r="10" fill="#ffd700"/><circle cx="39" cy="51" r="10" fill="#ffd700"/><circle cx="61" cy="51" r="10" fill="#ffd700"/><circle cx="50" cy="40" r="12" fill="#5c4033"/></g></svg>';

const svgMargaritaRamo = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 50 L 50 90 M50 60 L 25 90 M50 60 L 75 90" stroke="#228b22" stroke-width="4"/><g transform="translate(0, -10)"><circle cx="50" cy="25" r="10" fill="#fff"/><circle cx="50" cy="55" r="10" fill="#fff"/><circle cx="35" cy="40" r="10" fill="#fff"/><circle cx="65" cy="40" r="10" fill="#fff"/><circle cx="39" cy="29" r="10" fill="#fff"/><circle cx="61" cy="29" r="10" fill="#fff"/><circle cx="39" cy="51" r="10" fill="#fff"/><circle cx="61" cy="51" r="10" fill="#fff"/><circle cx="50" cy="40" r="12" fill="#ffd700"/></g><g transform="translate(-25, 10) scale(0.8)"><circle cx="50" cy="25" r="10" fill="#fff"/><circle cx="50" cy="55" r="10" fill="#fff"/><circle cx="35" cy="40" r="10" fill="#fff"/><circle cx="65" cy="40" r="10" fill="#fff"/><circle cx="39" cy="29" r="10" fill="#fff"/><circle cx="61" cy="29" r="10" fill="#fff"/><circle cx="39" cy="51" r="10" fill="#fff"/><circle cx="61" cy="51" r="10" fill="#fff"/><circle cx="50" cy="40" r="12" fill="#ffd700"/></g><g transform="translate(25, 10) scale(0.8)"><circle cx="50" cy="25" r="10" fill="#fff"/><circle cx="50" cy="55" r="10" fill="#fff"/><circle cx="35" cy="40" r="10" fill="#fff"/><circle cx="65" cy="40" r="10" fill="#fff"/><circle cx="39" cy="29" r="10" fill="#fff"/><circle cx="61" cy="29" r="10" fill="#fff"/><circle cx="39" cy="51" r="10" fill="#fff"/><circle cx="61" cy="51" r="10" fill="#fff"/><circle cx="50" cy="40" r="12" fill="#ffd700"/></g></svg>';

const svgAbeja = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><ellipse cx="50" cy="50" rx="25" ry="18" fill="#e1b12c"/><path d="M40 32 L40 68 M60 32 L60 68" stroke="#000" stroke-width="6"/><circle cx="65" cy="45" r="3" fill="#000"/><path d="M45 32 C 35 10, 15 15, 40 32" fill="#add8e6" opacity="0.7"/><path d="M55 32 C 65 10, 85 15, 55 32" fill="#add8e6" opacity="0.7"/></svg>';

const posicionesCarta = ['esquina-1', 'esquina-2', 'esquina-3', 'esquina-4', 'borde-1', 'borde-2'];
posicionesCarta.forEach((pos, index) => {
    const div = document.createElement('div');
    div.className = `flor flor-carta ${pos}`;
    div.innerHTML = index % 2 === 0 ? svgGirasolRamo : svgMargaritaRamo;
    carta.appendChild(div);
});

const baseCesped = document.createElement('div');
baseCesped.id = 'jardin-base';
container.appendChild(baseCesped);

const jardin = document.createElement('div');
jardin.id = 'jardin-inferior';
container.appendChild(jardin);

const cantidadFlores = 120;

const tiposConPeso = [
    { clase: 'ramillo', svg: svgRamillo, peso: 2 },
    { clase: 'margarita-ramo', svg: svgMargaritaRamo, peso: 2 },
    { clase: 'girasol-ramo', svg: svgGirasolRamo, peso: 5 }
];

let opciones = [];
tiposConPeso.forEach(tipo => {
    for (let j = 0; j < tipo.peso; j++) {
        opciones.push(tipo);
    }
});

const tamanios = ['grande', 'medio', 'pequeno'];
const animaciones = ['balanceo-lento', 'balanceo-medio', 'balanceo-rapido'];

for (let i = 0; i < cantidadFlores; i++) {
    const div = document.createElement('div');
    
    const tipo = opciones[Math.floor(Math.random() * opciones.length)];
    let tamanio = tamanios[Math.floor(Math.random() * tamanios.length)];
    const animacion = animaciones[Math.floor(Math.random() * animaciones.length)];
    
    if (tipo.clase === 'girasol-ramo') {
        tamanio = Math.random() > 0.3 ? 'grande' : 'medio';
    }
    
    div.className = `flor flor-jardin ${tipo.clase} ${tamanio}`;
    div.innerHTML = tipo.svg;
    
    const posX = Math.random() * 95;
    
    let posY;
    if (tamanio === 'pequeno') {
        posY = Math.random() * 30 + 10;
    } else if (tamanio === 'medio') {
        posY = Math.random() * 30 - 5;
    } else {
        posY = Math.random() * 20 - 15;
    }
    
    div.style.left = `${posX}%`;
    div.style.bottom = `${posY}%`;
    
    const duracionAnim = (Math.random() * 2 + 3).toFixed(1);
    const retrasoAnim = (Math.random() * 2).toFixed(1);
    
    div.style.animation = `${animacion} ${duracionAnim}s ease-in-out ${retrasoAnim}s infinite alternate`;
    
    jardin.appendChild(div);
}

const cantidadAbejas = 10;

for (let i = 0; i < cantidadAbejas; i++) {
    const div = document.createElement('div');
    div.className = 'abeja';
    div.innerHTML = svgAbeja;
    
    const size = Math.floor(Math.random() * 30) + 30;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    
    const topPos = Math.random() * 60 + 5;
    div.style.top = `${topPos}%`;
    
    const animName = Math.random() > 0.5 ? 'volar-erratico-1' : 'volar-erratico-2';
    const duration = (Math.random() * 15 + 10).toFixed(1);
    const delay = (Math.random() * 15).toFixed(1);
    
    div.style.animation = `${animName} ${duration}s linear ${delay}s infinite`;
    
    container.appendChild(div);
}
const audio = document.getElementById('musicaFondo');
const botonMusica = document.getElementById('control-musica');

// Baja un poco el volumen (0.3 es el 30%) para que no asuste al abrir
audio.volume = 0.3; 

// Intentar reproducir automaticamente
audio.play().then(() => {
    // Si se reproduce correctamente sin ayuda, ocultar el boton
    botonMusica.classList.add('oculto');
}).catch(error => {
    // Si el navegador bloquea el autoplay, el boton queda visible
    console.log("Autoplay bloqueado. Esperando interaccion.");
});

// Reproducir si hace click en el boton
botonMusica.addEventListener('click', () => {
    audio.play();
    botonMusica.classList.add('oculto');
});

// Reproducir si toca cualquier parte de la pantalla (truco para celulares)
document.body.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        botonMusica.classList.add('oculto');
    }
}, { once: true });