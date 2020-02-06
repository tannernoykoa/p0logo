var x;
var y;

function setup() {
  // put setup code here
  	createCanvas(580, 500);
    background(0);

}

function draw() {
  let x = mouseX;
  let y = mouseY;
  // put drawing code here
  print(x,y);

  noStroke();
  fill(0, 0, 255)
  triangle(175, 380, 290, 60, 405, 380);
  fill(255, 0, 0)
  triangle(150, 375, 290, 100, 430, 375);
  fill(0, 255, 0);
  triangle(175, 360, 290, 125, 405, 360);
  fill(0, 0, 0);
  triangle(185, 355, 290, 135, 395, 355);

}