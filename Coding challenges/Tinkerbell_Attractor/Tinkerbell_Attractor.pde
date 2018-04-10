float x = -0.72;
float y = -0.64;

float a = 0.9;
float b = -0.6013;
float c = 2;
float d = 0.50;

//The formula to create these attractors is
//xnew=sqr(x)-sqr(y)+(a*x)+(b*y)
//ynew=(2*x*y)+(c*x)+(d*y)

void setup(){
  size(800, 600);
  background(0);
}

void draw(){    
  float dx = pow(x,2)-pow(y,2)+a*x+b*y;
  float dy = 2*x*y+c*x+d*y;
  
  x = x + dx;
  y = y + dy;
    
  translate(width/2, height/2);
  scale(5);
  stroke(255);  
  point(x, y);
    
  println(x, y);
}