var screen = document.getElementById("screen");
var context = screen.getContext("2d");

window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);

function keyUp(e) {
    if (e.keyCode === 38) {
        player.curveDown = false;
    } else if (e.keyCode === 40) {
        player.curveUp = false;
    } else if (e.keyCode === 32) {
        player.fire(this.context);
    }
}

function keyDown(e) {
    if (e.keyCode === 38) {
        player.curveDown = true;
    } else if (e.keyCode === 40) {
        player.curveUp = true;
    }
}

function clearScreen() {
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(0, 0, screen.width, screen.height);
    context.strokeRect(0, 0, screen.width, screen.height);
    context.closePath();
}

function gameLifeCicle() {
    clearScreen();
    player.move();
    player.draw(context, screen);

}

window.setInterval(gameLifeCicle, 5);

