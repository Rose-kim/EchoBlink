let capture;

function setup() {
  createCanvas(1280, 800);
  capture = createCapture(VIDEO);
  capture.size(1280, 900);
  capture.hide();
  img = loadImage('assets/visual_cue.png');
}

function draw() {
  background(255);
  image(capture, 0, 0,1280,900);
  image(img,0,0);
  //background(255);
  //filter(INVERT);
}
