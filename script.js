// ⏳ Countdown Timer
const birthday = new Date("Feb 18, 2026 00:00:00").getTime();

setInterval(() => {
  let now = new Date().getTime();
  let diff = birthday - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes`;
}, 1000);

// 🎂 Blow Candle
function blowCandle() {
  document.getElementById("wish").innerText =
    "✨ May all Your wish definitely come true!";
}


// 🎶 Music
function playMusic() {
  document.getElementById("music").play();
}


//firework
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework() {
  for (let i = 0; i < 50; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      dx: (Math.random() - 0.5) * 6,
      dy: (Math.random() - 0.5) * 6,
      life: 100
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    ctx.fillStyle = "gold";
    ctx.fillRect(p.x, p.y, 3, 3);
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
    if (p.life <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

createFirework();
animate();

