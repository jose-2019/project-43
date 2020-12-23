var hr,mn,sc;
var hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(400,400);

}

function draw() {
  background(0);  

  angleMode(DEGREES);

  translate(200,200);
  rotate(45);

  hr=hour();
  mn=minute();
  sc=second();

hrAngle= map(hr%12,0,12,0,360);
mnAngle= map(mn,0,60,0,360);
scAngle= map(sc,0,60,0,360);

push();
noFill();
strokeWeight(8);
stroke("yellow");
arc(0,0,260,260,0,hrAngle);
rotate(hrAngle);
line(0,0,50,0);
pop();

push();
noFill();
strokeWeight(9);
stroke("green");
arc(0,0,280,280,0,mnAngle);
rotate(mnAngle);
line(0,0,120,0);
pop();

push();
noFill();
strokeWeight(9);
stroke("red");
arc(0, 0, 300, 300,0,scAngle );
rotate(scAngle);
line(0,0,100,0);
pop();



}