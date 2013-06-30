var screen = document.getElementById("screen");
var context = screen.getContext("2d");
var player = new Player();
var bombs = [];
var bombsFired = 0;

//Key actions
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
function keyUp(e) {
    if (e.keyCode === 38) {
        player.decreaseAngle(false);
    } else if (e.keyCode === 40) {
        player.increaseAngle(false);
    } else if (e.keyCode === 32) {
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

//Player firing a bomb
function playerFire() {
    bombs[bombsFired] = new Bomb();
    bombs[bombsFired].setCoordinateX(player.getCoordinateX());
    bombs[bombsFired].setCoordinateY(player.getCoordinateY());
    bombs[bombsFired].setVelocityY(player.getVelocityY());
    bombs[bombsFired].setVelocityX(player.getVelocityX());
    bombs[bombsFired].setAngle(player.getAngle());
    bombsFired++;
}

//Clear the draws
function clearScreen() {
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(0, 0, screen.width, screen.height);
    context.strokeRect(0, 0, screen.width, screen.height);
    context.closePath();
}

//The game's life cicle
function gameLifeCicle() {
    clearScreen();

    //Drawing and moving the player
    player.move();
    player.draw(context, screen);
    
    //Drawing and moving the bombs
    for (i = 0; i < bombsFired; i++) {
        bombs[i].move();
        bombs[i].draw(context, screen);
    }

}
window.setInterval(gameLifeCicle, 5);

