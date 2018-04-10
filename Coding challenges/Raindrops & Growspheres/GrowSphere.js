function GrowSphere(radius, positionX, positionY, color){
		this.xPos = positionX;
		this.yPos = positionY;
		this.rad = radius;
		this.col = color;
		this.growthRate = 2;
};

GrowSphere.prototype.display = function(){
	fill(this.col);
	ellipse(this.xPos, this.yPos, this.rad, this.rad);
	this.rad += this.growthRate;

	if(this.rad > 99){
		this.growthRate = -2;
	}
	else if(this.rad < 1){
		this.growthRate = 2;
	}
};

GrowSphere.prototype.move = function(){
	if(this.xPos < 0 || this.xPos > width){
		this.xPos = 0;
	}
	if(this.yPos < 0 || this.yPos > height){
		this.yPos = 0;
	}

	if (random(0, 1) >= 0.95) {
		this.xPos += (mouseX - this.xPos) * .1;
		this.yPos += (mouseY - this.yPos) * .1;
	}
	else{
		this.xPos += random(-5, 5);
		this.yPos += random(-5, 5);
	}
};
