function Bomb() {
    var width = 10;
    var height = 5;
    var coordinateX = 0;
    var coordinateY = 0;
    var velocityX = 0;
    var velocityY = 0;
    var gravity = 0.01;
    var angle = 0;
    
    this.draw = function(context, screen) {
        if(coordinateX > screen.width || coordinateY > screen.height) {
            coordinateX = -screen.width;
            coordinateY = -screen.height;
            velocityX = 0;
            velocityY = 0;
            gravity = 0;
        }
        context.save();
        context.translate(coordinateX, coordinateY);
        //Transforming the angle in rad
        context.rotate(angle * (Math.PI / 180));
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(width/-2, (height-50)/-2, width, height);
        context.closePath();
        context.restore();
    };
    
    this.move = function() {
        velocityY += gravity;
        coordinateX += velocityX;
        coordinateY += velocityY;
    };
    
    this.getWidth = function(){
        return width;
    };
    
    this.setWidth = function(w){
        width = w;
    };
    
    this.getHeight = function(){
        return height;
    };
    
    this.setHeight = function(h){
        height = h;
    };
    
    this.getCoordinateX = function() {
        return coordinateX;
    };
    
    this.setCoordinateX = function(cX) {
        coordinateX = cX;
    };
    
    this.getCoordinateY = function() {
        return coordinateY;
    };
    
    this.setCoordinateY = function(cY) {
        coordinateY = cY;
    };
    
    this.getVelocityX = function() {
        return velocityX;
    };
    
    this.setVelocityX = function(vX) {
        velocityX = vX;
    };
    
    this.getVelocityY = function() {
        return velocityY;
    };
    
    this.setVelocityY = function(vY) {
        velocityY = vY;
    };
    
    this.setAngle = function(a){
        angle = a;
    };
    
    this.getAngle = function(){
        return angle;
    };
    
    this.getGravity = function() {
        return gravity;
    };
    
    this.setGravity = function(g) {
        gravity = g;
    }
}