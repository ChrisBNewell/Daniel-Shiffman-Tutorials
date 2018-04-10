//xnew=sin(y*b)+c*sin(x*b)
//ynew=sin(x*a)+d*sin(y*a)

//The parameters a, b, c and d in the above formula control the shape the attractor will form. 
//The values for a and b can be any floating point value between -3 and +3. 
//The values for c and d can be any floating point value between -0.5 and +1.5.
//Within these ranges a virtually limitless variety of attractor shapes can emerge.

float x = 0.01;
float y = 0.01;

float a = 1;
float b = -2;
float c = -0.3;
float d = 0.7;


void setup(){
  size(800, 600);
  background(0);
}

void draw(){  
  
  float dx = sin(y * b) + c * sin(x * b);
  float dy = sin(x * a) + d * sin(y * a);
  
  x = x + dx;
  y = y + dy;
  
  translate(width/2, height/2);  
  scale(10);
  stroke(255);  
  point(x, y); 
  
  println(x, y);
}