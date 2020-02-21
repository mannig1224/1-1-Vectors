class Ball {
    constructor() {
      this.location = new createVector(width/2, height/2);
      this.velocity = new createVector(1, 1.5);
    }
  
    move() {
        location.add(this.velocity);
    };

    bounce() {
        //[full] Check for bouncing.
        if ((location.x > width) || (location.x < 0)) {
            velocity.x = velocity.x * -1;
        }
        if ((location.y > height) || (location.y < 0)) {
            velocity.y = velocity.y * -1;
        };
    };

    display() {
        stroke(0);
        fill(175);
        // Display the ball at the location (x,y).
        ellipse(location.x,location.y,16,16);
    };
} 