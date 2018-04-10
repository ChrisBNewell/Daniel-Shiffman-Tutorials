import peasy.*;
import peasy.org.apache.commons.math.*;
import peasy.org.apache.commons.math.geometry.*;
import peasy.test.*;

float x = 1;
float y = 1;
float z = 1;

float a = 10;  //sigma
float b = 28;  //rho
float c = 8.0/3.0;  //beta

float dt = 0.01;
float dx;
float dy;
float dz;

ArrayList<PVector> points = new ArrayList<PVector>();
PeasyCam cam;


void setup(){
  size(800, 600, P3D);  
  colorMode(HSB);
  cam = new PeasyCam(this, 500);
}


void draw(){
  background(0);
  
  dx = (a * (y - x)) * dt;
  dy = (x * (b - z) - y) * dt;
  dz = (x * y - c * z) * dt;
    
  x = x + dx;
  y = y + dy;
  z = z + dz;  
  
  if(points.size() > 10000){
   points.clear();
  }
  
  points.add(new PVector(x, y, z));    
  
  translate(0, 0, -80);
  scale(5);
  stroke(255);  
  noFill();
    
  float hue = 0;
  beginShape();
  for(PVector v : points){
    stroke(hue, 255, 255);
    vertex(v.x, v.y, v.z);
    
    hue += 0.1;    
    if(hue > 255){
      hue = 0;    
    }
  }
  endShape();
  
  println(points.size(), x, y, z);
}