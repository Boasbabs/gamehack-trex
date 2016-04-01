var movingObstacle;
var animate;
var dinosaur = $("#trex");

function init() {
	// trying to make the objects appear on the right
	movingObstacle = $('#movingElement');
	movingObstacle.css('position','relative');
	// movingObstacle.css('right','0px');
	movingObstacle.css('left','200px');
}
function moveLeft() {
	// trying to move them to the left side of the screen
	// movingObstacle.style.right = parseInt(movingObstacle.style.right) + 10 + 'px';
	movingObstacle.css('left',parseInt(movingObstacle.css('left')) - 5 + 'px');	
	animate = setTimeout(moveLeft, 100);

	// Check the right position of the dinosaur and compare it with left position of the movingObstacle
	var leftPositionOfDinosaur = parseInt(dinosaur.css('left'));
	var widthOfDinosaur = parseInt(dinosaur.css('width'));
	var leftPositionOfObstacle = parseInt(movingObstacle.css('left'));

	// console.log(leftPositionOfDinosaur);
	// console.log(leftPositionOfObstacle);
	console.log(Math.abs(leftPositionOfDinosaur - leftPositionOfObstacle));
	console.log(widthOfDinosaur);

	if (Math.abs(leftPositionOfDinosaur - leftPositionOfObstacle) <= widthOfDinosaur){
		alert('Game Over');
		clearTimeout(animate);
		return;
	}

	// if (movingObstacle == dinosaur.style.right) { alert("game over")} else {}
}
function stopMoving() {
	// this is to stop moving object by clearTimeout
	clearTimeout(animate);
	// movingObstacle.style.right = "0px";
}
window.onload = init();

//checking for collision
