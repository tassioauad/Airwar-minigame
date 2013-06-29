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
    
    this.setWidth = function(width){
        this.width = width;
    };
    
    this.getHeight = function(){
        return this.height;
    };
    
    this.setHeight = function(height){
        this.height = height;
    };
    
    this.getCoordinateX = function() {
        return this.coodinateX;
    };
    
    this.setCoordinateX = function(coordinateX) {
        this.coodinateX = coordinateX;
    };
    
    this.getCoordinateY = function() {
        return this.coodinateY;
    };
    
    this.setCoordinateY = function(coordinateY) {
        this.coodinateY = coordinateY;
    };
    
    this.getVelocityX = function() {
        return this.velocityX;
    };
    
    this.setVelocityX = function(velocityX) {
        this.velocityX = velocityX;
    };
    
    this.getVelocityY = function() {
        return this.velocityY;
    };
    
    this.setVelocityY = function(velocityY) {
        this.velocityY = velocityY;
    };
    
    this.angle = function(angle){
        this.angle = angle;
    };
}