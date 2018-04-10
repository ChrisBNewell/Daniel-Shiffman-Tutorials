function Raindrop(xPos, yPos, rWidth, rHeight, color){
		this.x = xPos;
		this.y = yPos;
		this.width = rWidth;
		this.height = rHeight;
		this.color = color;
};

Raindrop.prototype.draw = function(){
	noStroke();
	fill(this.color);
	rect(this.x, this.y, this.width, this.height);
};

Raindrop.prototype.update = function(xForce, yForce){
	this.x += xForce;
	this.y += yForce;

	if(this.y > height){
		this.y = random(0, -100);
	}
	if(this.x > width){
		this.x = random(0, -100);
		this.y = random(0, -100);
	}
};
