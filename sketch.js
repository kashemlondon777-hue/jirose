var sandy= 0;
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}
//The draw function happens over and over again
function draw() {
  background(12, 245, 38); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  fill(245, 59, 12,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
ellipse(50,80, 50,50); // center of canvas, 20px dia
ellipse(130,400, 50,50);
ellipse(210,80, 50,50);
ellipse(290,400, 50,50);
ellipse(370,80, 50,50);
ellipse(450,400, 50,50);
stroke(250, 0, 0);
fill(0, 0, 0,250);
rect(100,180,320,100);
fill(random(1,255),random(1,255),random(1,255),sandy);
textFont('arial');
textSize(50);
text('jirose',200,250);

 } 
function mousePressed(){
  if (sandy>=255) {
    sandy=0;}
    else {
  sandy=sandy+255;}
}