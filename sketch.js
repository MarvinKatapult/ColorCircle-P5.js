const STARTPOINT = -90;
var a = STARTPOINT;

function setup() {
  createCanvas(1000, 700);
  background(255);
  angleMode(DEGREES);

}

function draw() {
  var r = 200;
  colorMode(HSB, 360 + STARTPOINT);

  stroke(color(a, 270, 270));
  strokeWeight(5);

  point(width/2 + cos(a) * r , height/2 + sin(a) * r);
 
  if (a > (360 + STARTPOINT)) {
    a = STARTPOINT;
    background(255);
  }
  
  a += 3;
}
