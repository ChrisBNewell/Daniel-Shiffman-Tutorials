var vehicles = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
  background(51);

  for (var i = 0; i < 10; i++) {
    var startPos = createVector(random(0, width), random(0, height));
    vehicles.push(new Vehicle(startPos));
  }
}

function draw() {
  background(51);
  var mousepos = createVector(mouseX, mouseY);

  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].arrive(mousepos);
    vehicles[i].update();
    vehicles[i].display();
    vehicles[i].checkPosition();
  }
}
