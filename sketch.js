var hr,sc,mn;
var hrAngle,scAngle,mnAngle;

function setup() {
  createCanvas(800,400);
  //To use angle in Degrees
  Anglemode(DEGREES);
}

function draw() {
  background(0);  

  //Translation and Rotation
  translate(200,200)
  rotate(-90)

  //Calculating time using predefined func from p5.js
hr = hour();
mn = minute();
sc = second();

//To create ab interative rotation
scAngle = map(sc, 0, 60, 0, 360);
mnAngle = map(mn, 0, 60, 0, 360);
hrAngle = map(hr % 12, 0, 12, 0, 360);

//drawing seconds hand
Push()
rotate(scAngle); //rotate the hand based on angle calculated
stroke(225,0,0);
strokeWeight(7);
line(0,0,100,0);
Pop()
//drawing mins hand

Push()
rotate(mnAngle)
stroke(0,225,0);
strokeWeight(7);
line(0,0,100,0);
Pop()

//drawing hr hand
Push()
rotate(hrAngle);
stroke(0,0,225);
strokeWeight(7);
line(0,0,100,0);
Pop()
}