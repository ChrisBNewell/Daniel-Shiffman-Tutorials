function Branch(parent, pos, dir){
  this.position = pos;
  this.parent = parent;
  this.direction = dir;
  this.origionalDirection = this.direction.copy();
  this.count = 0;
  this.len = 5;

  this.reset = function(){
    this.direction = this.origionalDirection.copy();
    this.count = 0;
  }

  this.next = function(){
    var nextDir = p5.Vector.mult(this.direction, this.len)
    var nextPosition = p5.Vector.add(this.position, this.direction);
    var nextBranch = new Branch(this, nextPosition, this.direction.copy());
    return nextBranch;
  }

  this.show = function(){
    if (parent != null) {
      stroke(255);
      line(this.position.x, this.position.y, this.parent.position.x, this.parent.position.y);
    }
  }
}
