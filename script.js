const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;


window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});


let shipX = width / 2;
window.addEventListener('mousemove', e => shipX = e.clientX);


let lastScroll = 25000;
window.scrollTo(0, 25000);

let shipY = height - 100;
let vy = 0;


function loop() {

    requestAnimationFrame(loop);
    
    let currentScroll = window.scrollY;
    let delta = currentScroll - lastScroll;
    lastScroll = currentScroll;

    if (currentScroll < 2000 || currentScroll > 48000) {
        window.scrollTo(0, 25000);
        lastScroll = 25000;
        delta = 0;
    }
    
    if (Math.abs(delta) > 0) {
        document.getElementById('intro').style.opacity = 0;
    }

    vy -= delta * 0.18;
    vy += 1.2; 
    vy *= 0.88; 
    
    shipY += vy;
    
    if (shipY > height - 60) { 
        shipY = height - 60; 
        vy = 0; 
    }
    if (shipY < 60) { 
        shipY = 60; 
        vy = 0; 
    }

    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0ff';
    ctx.beginPath();
    ctx.moveTo(shipX, shipY - 20);
    ctx.lineTo(shipX - 15, shipY + 15);
    ctx.lineTo(shipX, shipY + 10);
    ctx.lineTo(shipX + 15, shipY + 15);
    ctx.fill();
}


loop();


