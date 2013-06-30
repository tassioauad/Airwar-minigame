function Bomb() {
    var width = 10;
    var height = 5;
    var coordinateX = 0;
    var coordinateY = 0;
    var velocityX = 0;
    var velocityY = 0;
    var angle = 0;
    
    this.draw = function(context) {
        context.beginPath();
        context.fillStyle = "black";
        context.fillRect(coordinateX, coordinateY, width, height);
        context.strokeRect(coordinateX, coordinateY, width, height);
        context.closePath();
    };
    
    this.move = function() {
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
    
    this.setVelocity = function(vY) {
        velocityY = vY;
    };
    
    this.angle = function(a){
        angle = a;
    };
}