let backspace, backspaceX, backspaceY, backspaceInitialPosX, backspaceInitialPosY;
const backspaceW = 355;
const backspaceH = 142;
const backspaceScale = 0.7;

function backspaceSetup() {
  backspace = new Sprite(width / 2, height / 2);
	backspace.addImage(backspaceImage);
	backspace.scale = backspaceScale;

	backspace.InitialX = backspace.position.x;
	backspace.InitialY = backspace.position.y; 
}

function animateBackspace() {
	if (backspace.mouse.dragging() && gravityModeOn) {
		backspace.moveTowards(mouse.x + backspace.mouse.x, mouse.y + backspace.mouse.y, 1);
	  }

	if (kb.presses('backspace') || backspace.mouse.pressed()) {
		//keyPress.playMode('restart');
		//keyPress.setVolume(0.5)
		//keyPress.play();
		deletedChars += userClickMultiplier * rageModeMultiplier;
		let targetScale = backspaceScale - 0.1;
		let duration = 10;
		let startTime = millis();
		let startScale = backspace.scale;
		let easing = function(t) {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		}; // cubic easing function
		let updateScale = function() {
			let now = millis();
			let t = (now - startTime) / duration;
			if (t >= 1) {
				backspace.scale = targetScale;
				requestAnimationFrame(reverseScale);
			} else {
				backspace.scale = lerp(startScale, targetScale, easing(t));
				requestAnimationFrame(updateScale);
			}
		};
		let reverseScale = function() {
			let targetScale = backspaceScale;
			let duration = 100;
			let startTime = millis();
			let startScale = backspace.scale;
			let easing = function(t) {
				return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
			}; // cubic easing function
			let updateScale = function() {
				let now = millis();
				let t = (now - startTime) / duration;
				if (t >= 1) {
					backspace.scale = targetScale;
				} else {
					backspace.scale = lerp(startScale, targetScale, easing(t));
					requestAnimationFrame(updateScale);
				}
			};
			updateScale();
		};
		updateScale();
	}
}