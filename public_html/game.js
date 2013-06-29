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
        console.log("keyup descrease");
    } else if (e.keyCode === 40) {
        player.increaseAngle(false);
        console.log("keyup increase");
    }else if (e.keyCode === 32) {
        bombs[bombsFired] = new Bomb();
        bombsFired++;
    }
}
function keyDown(e) {
    if (e.keyCode === 38) {
        player.decreaseAngle(true);
    } else if (e.keyCode === 40) {
        player.increaseAngle(true);
    }
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
    player.move();
    player.draw(context, screen);
    
    for (i = 0; i < bombsFired; i++) {
        bombs[i].move();
        bombs[i].draw(context);
    }
}
window.setInterval(gameLifeCicle, 5);

