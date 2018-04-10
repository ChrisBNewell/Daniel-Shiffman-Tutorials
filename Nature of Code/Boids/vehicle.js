function Vehicle(position){
  this.position = createVector(position.x, position.y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.maxSpeed = 5;
  this.maxforce = .3;
  this.strokeColor = { x:random(0, 255), y:(0, 255), z:random(0, 255) }
  this.fillColor = { x:random(0,255), y:(0, 255), z:random(0, 255) }

  this.applyForce = function(force){
    this.acceleration.add(force);
  }

  this.checkPosition = function(){
    if (this.position.x == mouseX || this.position.y == mouseY) {
      this.position = createVector(random(0, width), random(0, height));
    }
  }

  this.arrive = function(target){
    var desired = p5.Vector.sub(target, this.position);
    var d = desired.mag();
    desired.normalize();

    if (d < 100) {
      var m = map(d, 0, 100, 0, this.maxSpeed);
      desired.mult(m);
    } else {
      desired.mult(this.maxSpeed);
    }

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);

  }

  this.seek = function(target){
    var desired = p5.Vector.sub(target, this.position);
    desired.normalize();
    desired.mult(this.maxSpeed);

    var steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce);
    this.applyForce(steer);
  }

  this.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function(){
    fill(this.fillColor.x, this.fillColor.y, this.fillColor.z);
    stroke(this.strokeColor.x, this.strokeColor.y, this.strokeColor.z);
    rect(this.position.x, this.position.y, 10, 10);
  }
}
