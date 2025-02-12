function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

const body = document.querySelector('body');
const canvasSize = body.offsetWidth * body.offsetHeight;
const starsFraction = canvasSize / 4500;

for(let i = 0; i < starsFraction; i++) {
  let xPos = random(0, 100);
  let yPos = random(0, 100);
  let alpha = random(0.5, 1);
  let size = random(1, 2);
  let colour = '#ffffff';
    
  const star = document.createElement('div');
  star.style.position = 'relative';
  star.style.left = xPos + '%';
  star.style.top = yPos + '%';
  star.style.opacity = alpha;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.backgroundColor = colour;
  document.body.appendChild(star);
}

let ufo = {x: 60, y: 70, width: 90, speed: 3}

function setup() {
  createCanvas(1400, 125)
  noStroke()
}

function draw() {
  background("black")
  drawUfo()
  moveUfo()
}

function drawUfo() {
  fill("silver")
  ellipse(ufo.x, ufo.y, ufo.width, 30)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 35)
}

function moveUfo() {
  ufo.x += ufo.speed
  if (ufo.x > width || ufo.x < 0) {
    ufo.speed = -ufo.speed
  }
}
