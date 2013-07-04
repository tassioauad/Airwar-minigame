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

function Warship() {
    var image = new Image();
    //236x94
    var width = 150;
    var height = 60;
    var coordinateX = 0;
    var coordinateY = 0;
    var velocityX = 0;
    var shotAngle = 0;
    
    this.draw = function(context) {
        context.drawImage(image, coordinateX, coordinateY, width, height);
    };
    
    this.move = function(screen) {
        if(coordinateX <= screen.width - width && coordinateX >= 0) {
            coordinateX += velocityX;
        }
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
    
    this.setShotAngle = function(a){
        shotAngle = a;
    };
    
    this.getShotAngle = function(){
        return shotAngle;
    };
    
    this.setImage = function(i) {
         image = i;
    };
 
    this.getImage = function() {
        return image;
    };
}