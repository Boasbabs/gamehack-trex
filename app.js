var movingObstacle;
var animate;
var dinosaur = document.getElementById("trex");

function init() {
	// trying to make the objects appear on the right
	movingObstacle = document.getElementById('movingElement');
	movingObstacle.style.position = "relative";
	movingObstacle.style.right = "0px";
}
function moveLeft() {
	// trying to move them to the left side of the screen
	movingObstacle.style.right = parseInt(movingObstacle.style.right) + 10 + 'px';
	animate = setTimeout(moveLeft, 100);
	if (movingObstacle == dinosaur.style.right) { alert("game over")} else {}
}
function stopMoving() {
	// this is to stop moving object by clearTimeout
	clearTimeout(animate);
	movingObstacle.style.right = "0px";
}
window.onload = init();

//checking for collision
