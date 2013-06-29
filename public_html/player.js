var bullet = {
    width: 10,
    height: 5,
    coordinateX: 0,
    coordinateY: 0,
    velocityX: 0,
    velocityY: 0,
    angle: 0,
    draw: function(context) {
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(this.coordinateX, this.coordinateY, this.width, this.height);
        context.strokeRect(this.coordinateX, this.coordinateY, this.width, this.height);
        context.closePath();
    },
    move: function() {
        this.coordinateX += this.velocityX;
        this.coordinateY += this.velocityY;
    },
}
var player = {
    width: 70,
    height: 40,
    coordinateX: 200,
    coordinateY: 200,
    angle: 0,
    velocity: 1,
    curveDown: false,
    curveUp: false,
    bullets: [],
    bulletsFired: 0,
    fire: function(context) {
        this.bulletsFired++;
        this.bullets[this.bulletsFired] = new bullet;
        this.bullets[this.bulletsFired].coordinateX = this.coordinateX;
        this.bullets[this.bulletsFired].coordinateY = this.coordinateY;
        this.bullets[this.bulletsFired].velocityX = this.velocityX + 0.1;
        this.bullets[this.bulletsFired].velocityY = this.velocityY;
    },
    draw: function(context, screen) {
        if (this.curveDown) {
            this.angle++;
        } else if (this.curveUp) {
            this.angle--;
        }
        context.save();
        context.translate(this.coordinateX / 2, this.coordinateY / 2);
        //Transforming the angle in rad
        context.rotate(this.angle * (Math.PI / 180));
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        context.closePath();
        context.restore();

        for (i = 0; i < this.bulletsFired; i++) {
            this.bullets[i].draw(context);
        }
    },
    move: function() {
        //Getting how many turns the object has been done.
        var turn = this.angle / 360;
        //Getting the decimal portion of the number of turns and mutiplying by 360.
        var correctedAngle = (turn % 1) * 360;
        //The angle -90 is actually 270
        if (correctedAngle < 0) {
            correctedAngle += 360;
        }

        //Getting the angle between the two nearer axis.
        var auxAngleY = 0;
        var auxAngleX = 0;
        if (correctedAngle <= 180) {
            if (correctedAngle <= 90) {
                auxAngleY = correctedAngle;
                auxAngleX = 90 - correctedAngle;
            } else {
                auxAngleY = 180 - correctedAngle;
                auxAngleX = correctedAngle - 90;
            }
        } else {
            if (correctedAngle < 270) {
                auxAngleX = 270 - correctedAngle;
                auxAngleY = correctedAngle - 180;
            } else {
                auxAngleX = correctedAngle - 270;
                auxAngleY = 360 - correctedAngle;
            }
        }
        
        //The velocityY will be positive or negative?
        var factorY = 1;
        if (correctedAngle > 180) {
            factorY = -1;
        }
        //Calculating the velocityY
        velocityY = ((this.velocity * auxAngleY) / 90) * factorY;
        
        //The velocityX will be positive or negative?
        var factorX = -1;
        if (correctedAngle <= 90 || correctedAngle >= 270) {
            factorX = 1;
        }
        //Calculating the velocityX
        velocityX = ((this.velocity * auxAngleX) / 90) * factorX;
        
        this.coordinateX += velocityX;
        this.coordinateY += velocityY;
    }
};

