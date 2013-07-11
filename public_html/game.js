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

var screen = document.getElementById("screen");
var context = screen.getContext("2d");

//Images' path
var playerImagePath = "images/plane5.png";
var bombImagePath = "images/bomb2.png";
var warshipImagePath = "images/ship5.png";
var backgroundImagePath = "images/sky01.png";
var explosionImagePath = "images/bombexplosion.png";

//Player
var player = new Player();
player.getImage().src = playerImagePath;

//Bombs
var bombs = [];
var bombsFired = 0;

//Warships
var warships = [];
var warshipsAmount = 0;

//Explosions
var explosions = [];
var explosionsAmount = 0;

//Status variables
var damages = 0;
var bombAmount = 10;
var health = 100;
var bombStatusImagePath = "images/torpedo.png";
var healthStatusImagePath = "images/health.png";
var damageStatusImagePath = "images/damage.png";

//Key actions
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
function keyUp(e) {
    if (e.keyCode === 38) {
        player.decreaseAngle(false);
    } else if (e.keyCode === 40) {
        player.increaseAngle(false);
    } else if (e.keyCode === 32 && bombAmount > 0) {
        playerFire();
    }
}
function keyDown(e) {
    if (e.keyCode === 38) {
        player.decreaseAngle(true);
    } else if (e.keyCode === 40) {
        player.increaseAngle(true);
    }
}

function createWarship() {
    warships[warshipsAmount] = new Warship();
    warships[warshipsAmount].getImage().src = warshipImagePath;
    warships[warshipsAmount].setCoordinateY(screen.height - warships[warshipsAmount].getHeight());

    //if whichSide = 0, the warship will be created on the right side, if = 1, on the left side.
    var whichSide = Math.floor((Math.random() * 2));
    if (whichSide === 0) {
        warships[warshipsAmount].setCoordinateX(screen.width - warships[warshipsAmount].getWidth());
        warships[warshipsAmount].setVelocityX(-Math.random());
    } else {
        warships[warshipsAmount].setCoordinateX(0);
        warships[warshipsAmount].setVelocityX(Math.random());
    }
    warshipsAmount++;
}
createWarship();

//Player is firing a bomb
function playerFire() {
    bombs[bombsFired] = new Bomb();
    bombs[bombsFired].setCoordinateX(player.getCoordinateX());
    bombs[bombsFired].setCoordinateY(player.getCoordinateY());
    bombs[bombsFired].setVelocityY(player.getVelocityY());
    bombs[bombsFired].setVelocityX(player.getVelocityX());
    bombs[bombsFired].setAngle(player.getAngle());
    bombs[bombsFired].getImage().src = bombImagePath;
    bombsFired++;
    bombAmount--;
}

function drawStatus() {
    //Health status
    var healthImage = new Image();
    healthImage.src = healthStatusImagePath;
    context.drawImage(healthImage, 0, 0, 50, 50);
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.font = '25px "Arial Black", sans-serif';
    context.fillText(health, 55, 40);

    //Bombs status
    var bombImage = new Image();
    bombImage.src = bombStatusImagePath;
    context.drawImage(bombImage, 110, 0, 50, 50);
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.font = '25px "Arial Black", sans-serif';
    context.fillText(bombAmount, 165, 40);

    //Bombs status
    var damageImage = new Image();
    damageImage.src = damageStatusImagePath;
    context.drawImage(damageImage, 220, 0, 50, 50);
    context.fillStyle = "black";
    context.lineWidth = 1;
    context.font = '25px "Arial Black", sans-serif';
    context.fillText(damages, 275, 40);
}

function hasColided(object1, object2) {
    var object1Left = object1.getCoordinateX();
    var object1Bottom = object1.getCoordinateY() + object1.getHeight();

    var object2Left = object2.getCoordinateX();
    var object2Right = object2.getCoordinateX() + object2.getWidth();
    var object2Top = object2.getCoordinateY();

    if (object1Left >= object2Left && object1Left <= object2Right && object1Bottom >= object2Top) {
        return true;
    }

    return false;
}

//Clear the draws
function clearScreen() {
    var backgroundImage = new Image();
    backgroundImage.src = backgroundImagePath;
    context.drawImage(backgroundImage, 0, 0, screen.width, screen.height);
}

//The game's life cicle
function gameLifeCicle() {
    clearScreen();
    drawStatus();
    //Drawing and moving the player
    player.move();
    player.draw(context, screen);

    //Creating warships
    var createOrNot = Math.floor((Math.random() * 5000))
    if (createOrNot === 0) {
        createWarship();
    }

    //Drawing and moving the warships
    for (i = 0; i < warshipsAmount; i++) {
        warships[i].move(screen);
        warships[i].draw(context);

        //Deciding if the game have to change the velocity of the warship
        var changeVelocity = Math.floor((Math.random() * 1000));
        if (changeVelocity === 0) {
            warships[i].setVelocityX((Math.random() * 2) - 1);
        }
    }

    //Drawing and moving the bombs
    for (i = 0; i < bombsFired; i++) {
        bombs[i].move();
        bombs[i].draw(context, screen);

        //Testing colision
        for (j = 0; j < warshipsAmount; j++) {
            if (hasColided(bombs[i], warships[j])) {
                //Moving bomb to outside of screen
                bombs[i].setCoordinateX(-screen.width);
                bombs[i].setCoordinateY(-screen.height);
                bombs[i].setVelocityX(0);
                bombs[i].setVelocityY(0);
                bombs[i].setGravity(0);

                //Creating an explosion
                explosions[explosionsAmount] = new Explosion(
                        warships[j].getCoordinateX(),
                        warships[j].getCoordinateY()
                        );
                explosions[explosionsAmount].getImage().src = explosionImagePath;
                explosions[explosionsAmount].setFrameAmount(8);
                explosionsAmount++;
                
                //Moving warship to outside of screen
                warships[j].setCoordinateX(-screen.width - 1000);
                warships[j].setCoordinateY(-screen.height - 1000);
                warships[j].setVelocityX(0);
                //Increase damage points
                damages++;
            }
        }

        //Drawing explosions
        for (k = 0; k < explosionsAmount; k++) {
            explosions[k].draw(context, screen);
        }
    }
}
window.setInterval(gameLifeCicle, 5);

