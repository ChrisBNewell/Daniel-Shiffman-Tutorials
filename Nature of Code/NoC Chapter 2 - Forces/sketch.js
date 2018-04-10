var movers = [];
var gravity;
var friction;
var bounds;
var offset;
var wind;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	bounds = createVector(width, height);
	for (var i = 0; i < 100; i++) {
		var startPos = createVector(random(0, width), random(0, height));
		movers.push(new Mover(startPos, bounds));
	}
}

function draw() {
	background(51);
	wind = createVector(0.001, 0);

	for (var i = 0; i < movers.length; i++) {
		var m = movers[i].mass;
		gravity = createVector(0, 0.4 * m);
		friction = movers[i].velocity.copy();
		friction.mult(-1);
		friction.normalize();
		friction.mult(0.3);

		movers[i].applyForce(friction);
		movers[i].applyForce(wind);
		movers[i].applyForce(gravity);
		movers[i].checkEdges();
		//movers[i].applyEdgeForce();
		movers[i].update();
		movers[i].display();
	}
}

function mousePressed(){
	for (var i = 0; i < movers.length; i++) {
		var wind = createVector(random(-width / 10, width / 10), -100);
		movers[i].applyForce(wind);
	}
}
