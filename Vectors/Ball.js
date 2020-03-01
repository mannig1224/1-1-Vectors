class Ball {
    constructor(x,y) {
        this.location = new createVector(width/2, height/2);
        this.velocity = new createVector(x, y);
    }
    
    move() {
        this.location.add(this.velocity);
    };
    
    bounce() {
        //[full] Check for bouncing.
        if ((this.location.x > width) || (this.location.x < 0)) {
            this.velocity.x = this.velocity.x * -1;
        }
        if ((this.location.y > height) || (this.location.y < 0)) {
            this.velocity.y = this.velocity.y * -1;
        };
    };
    
    display() {
        stroke(0);
        fill(175);
        // Display the ball at the location (x,y).
        ellipse(this.location.x,this.location.y,16,16);
    };
} 