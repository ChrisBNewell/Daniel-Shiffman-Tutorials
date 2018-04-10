function Mover(position, bounds) {
  this.location = createVector(position.x, position.y);
  this.mass = random(2, 6);
  this.bounds = bounds;
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.fillColor = { x:random(0,255), y:random(0,255), z:random(0,255)}
  this.strokeColor = { x:random(0,255), y:random(0,255), z:random(0,255)}

  this.applyForce = function(force){
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  this.checkEdges = function(){
    if (this.location.x > width) {
      this.location.x = width;
      this.velocity.x *= -1;
    } else if (this.location.x < 0) {
      this.velocity.x *= -1;
      this.location.x = 0;
    }

    if (this.location.y > height) {
      this.velocity.y *= -1;
      this.location.y = height;
    } else if (this.location.y < 0) {
      this.velocity.y *= -1;
      this.location.y = 0;
    }
  }

  this.applyEdgeForce = function(){

    if (this.location.x > width - 50) {

    } else if (this.location.x < 50) {

    }

    if (this.location.y > height - 50) {

    } else if(this.location.y < 50) {

    }

    var distance = p5.Vector.sub(this.location, this.bounds);
    var f = p5.Vector.div(distance, this.mass);
    this.acceleration.add(f);
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function(){
    fill(this.fillColor.x, this.fillColor.y, this.fillColor.z);
    stroke(this.strokeColor.x, this.strokeColor.y, this.strokeColor.z);
    ellipse(this.location.x, this.location.y, this.mass * 16, this.mass * 16)
  }
}
