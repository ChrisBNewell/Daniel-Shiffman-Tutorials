function Leaf(){
  this.position = createVector(random(width), random(height - 100));
  this.reached = false;
  this.show = function(){
    ellipse(this.position.x, this.position.y, 4, 4);
  }
}
