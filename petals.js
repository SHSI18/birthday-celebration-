// floating petals animation by tsuyoshi
const canvas = document.getElementById("petals");
const ctx = canvas.getContext("2d");
let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let petals = [];
for (let i = 0; i < 40; i++) {
  petals.push({
    x: Math.random() * width,
    y: Math.random() * height,
    speedY: Math.random() * 1 + 0.5,
    speedX: Math.random() * 0.5 - 0.25,
    size: Math.random() * 10 + 10,
  });
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,182,193,0.7)";
  petals.forEach(p => {
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.size, p.size * 0.6, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
    p.y += p.speedY;
    p.x += p.speedX;
    if (p.y > height) p.y = 0;
    if (p.x > width) p.x = 0;
  });
  requestAnimationFrame(draw);
}
draw();
