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
function Explosion(x, y) {
    var image = new Image();
    var width = 127;
    var height = 128;
    var coordinateX = x;
    var coordinateY = y;
    var frame = 0;
    var fps = 10;
    var frameAmount = 0;

    this.draw = function(context, screen) {
        if (frame + 1 < frameAmount*fps) {
            context.drawImage(image, (Math.floor(frame/fps) * width), 0, width, height, coordinateX, coordinateY - height/2, width, height);
            frame++;
        }
    };

    this.setImage = function(i) {
        image = i;
    };

    this.getImage = function() {
        return image;
    };

    this.getWidth = function() {
        return width;
    };

    this.setWidth = function(w) {
        width = w;
    };

    this.getHeight = function() {
        return height;
    };

    this.setHeight = function(h) {
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

    this.setFrame = function(q) {
        frame = q;
    };

    this.getFrame = function() {
        return frame;
    };

    this.setFrameAmount = function(fA) {
        frameAmount = fA;
    };

    this.getFrameAmount = function() {
        return frameAmount;
    };

}

