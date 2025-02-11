let ufo = {x: 50, y: 80, width: 80, speed: 1}

function setup() {
  createCanvas(500, 300)
  noStroke()
}

function draw() {
  background("black")
  drawUfo()
  moveUfo()
}

function drawUfo() {
  fill("silver")
  ellipse(ufo.x, ufo.y, ufo.width, 20)
  ellipse(ufo.x, ufo.y - 10, ufo.width / 2, 25)
}

function moveUfo() {
  ufo.x += ufo.speed
  if (ufo.x > width || ufo.x < 0) {
    ufo.speed = -ufo.speed
  }
}
