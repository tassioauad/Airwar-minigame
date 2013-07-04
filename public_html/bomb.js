/*-
This is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This software is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this software.  If not, see <http://www.gnu.org/licenses/>.
*/

function Bomb() {
    var image = new Image();
    //15x35
    var width = 7;
    var height = 16;
    var coordinateX = 0;
    var coordinateY = 0;
    var velocityX = 0;
    var velocityY = 0;
    var gravity = 0.01;
    var angle = 0;
    
    this.draw = function(context, screen) {
        //TODO: Move these tests to move()
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
        context.drawImage(image, 10, 4, 47, 110, width/-2, (height-40)/-2, width, height);
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
    };
    
    this.setImage = function(i) {
         image = i;
    };
 
    this.getImage = function() {
        return image;
    };
}