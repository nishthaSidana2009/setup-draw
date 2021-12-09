let x = 100;
let y = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke("purple");
  frameRate(30);
}

function draw() {
  background(0);
  x = x-1;
  if (x < 0) {
    x = width;
  }
  line(x,0,x,height)
  y = y-1;
  if (y < 0){
    y = height;
  }
  line(0,y,width,y)
}