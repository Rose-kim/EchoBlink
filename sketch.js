let capture;

function setup() {
  createCanvas(1280, 800);
  capture = createCapture(VIDEO);
  capture.size(1280, 800);
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 1280, 800);
  //filter(INVERT);
}
