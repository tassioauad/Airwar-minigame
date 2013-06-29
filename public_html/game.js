var screen = document.getElementById("screen");
var context = screen.getContext("2d");
var player = new Player();

//Key actions
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
function keyUp(e) {
    if (e.keyCode === 32) {
        player.fire(this.context);
    }
}
function keyDown(e) {
    if (e.keyCode === 38) {
        player.increaseAngle();
    } else if (e.keyCode === 40) {
        player.decreaseAngle();
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

}
window.setInterval(gameLifeCicle, 5);

