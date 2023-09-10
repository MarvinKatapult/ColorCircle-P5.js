const STARTPOINT = -90;
const FULLCIRCLEDEGREES = 360 + STARTPOINT;
var a = STARTPOINT;
var points = [];

function setup() {
  createCanvas(1000, 700);
  colorMode(HSB, FULLCIRCLEDEGREES);
  background(FULLCIRCLEDEGREES);
  angleMode(DEGREES);
}

function draw() {
  var r = 250;
  var c = color(a, FULLCIRCLEDEGREES, FULLCIRCLEDEGREES);

  background(FULLCIRCLEDEGREES);
  stroke(c);
  fill(c)
  strokeWeight(5);

  points[points.length] = createVector(width/2 + cos(a) * r , height/2 + sin(a) * r);
 
  if (a > (FULLCIRCLEDEGREES)) {
    points = []
    a = STARTPOINT;
  }
  
  beginShape();
    for (var i = 0 ; i < points.length; i++) {
      vertex(points[i].x, points[i].y)
    }
  endShape(CLOSE);

  a += 1;
}
