var ellipses;
var raindrops;
var myCanvas;

function setup() {
	myCanvas = createCanvas(640, 480);
	background(100);
	ellipses = [];
	raindrops = [];

	for (var i = 0; i < 25; i++) {
	 	ellipses.push(new GrowSphere(random(25, 75), random(1, width), random(1, height), random(0, 255)));
	}

	for (var i = 0; i < 500; i++) {
	 	raindrops.push(new Raindrop(random(0, width), random(0, 0 - 300), random(1, 5), random(20, 35), random(0, 255)));
	}
};

function draw() {
	myCanvas.clear();
	background(51)
	if(mouseIsPressed){
		fill(0);
	};

	ellipse(mouseX, mouseY, 20, 20);

	ellipses.forEach(function(item){
		item.display();
		item.move();
	});

	raindrops.forEach(function(item){
		item.draw();
		item.update(2, 10);
	});
};
