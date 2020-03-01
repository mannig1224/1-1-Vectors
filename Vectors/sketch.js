// creating variable that will become a Ball object
let ball_1;
let ball_2;
function setup() {
	createCanvas(640, 360);
	ball_1 = new Ball(3,3);
	ball_2 = new Ball(5,5);
}

function draw() {
	background(255);
	ball_1.move();
	ball_2.move();
	ball_1.bounce();
	ball_2.bounce();
	ball_1.display();
	ball_2.display();
}