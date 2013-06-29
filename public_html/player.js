function Player(){
    var width =  70;
    var height = 40;
    var coordinateX = 200;
    var coordinateY = 200;
    var angle = 0;
    var velocity = 0.1;
    var increaseAngle = false;
    var decreaseAngle = false;
    
    this.draw = function(context, screen) {
        context.save();
        context.translate(coordinateX / 2, coordinateY / 2);
        //Transforming the angle in rad
        context.rotate(angle * (Math.PI / 180));
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(width / -2, height / -2, width, height);
        context.closePath();
        context.restore();
    };
    
    this.move = function() {
        if(increaseAngle === true) {
            angle++;
        } else if(decreaseAngle === true) {
            angle--;
        }
        //Getting how many turns the object has been done.
        var turn = angle / 360;
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
        var velocityY = ((velocity * auxAngleY) / 90) * factorY;

        //The velocityX will be positive or negative?
        var factorX = -1;
        if (correctedAngle <= 90 || correctedAngle >= 270) {
            factorX = 1;
        }
        //Calculating the velocityX
        var velocityX = ((velocity * auxAngleX) / 90) * factorX;

        coordinateX += velocityX;
        coordinateY += velocityY;
    };
    
    this.increaseAngle = function(bool) {
        increaseAngle = bool;
    };
    
    this.decreaseAngle = function(bool) {
        decreaseAngle = bool;
    };
};

