// creating variable that will become a Ball object
let ball;
function setup() {
	createCanvas(640, 360);
	ball = new Ball();
}

function draw() {
	background(255);
	ball.move();
	ball.bounce();
	ball.display();
}