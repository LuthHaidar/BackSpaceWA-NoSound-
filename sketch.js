let backspaceImage, keyPress, soundtrack;
function preload() {
	backspaceImage = loadImage('backspace.png');
	//keyPress = loadSound('keypress.mp3');
	//soundtrack = loadSound('soundtrack.mp3')
}

// Variable to keep track of deleted characters
var deletedChars = 0;

// Variables for upgrades
var autoClicksPerSecond = 0;
var userClickMultiplier = 1;

function setup() {
  new Canvas();
  background(255);
  //soundtrack.play();
  textFont("Consolas");
  boundarySetup();
  backgroundSetup();
  confettiSetup();
  backspaceSetup();
  upgradesSetup();
  allSprites.collider = 'static';
}

function compressNumber(num) {
  const units = ["", "K", "M", "B", "T"];
  let unitIndex = 0;
  while (num >= 1000 && unitIndex < units.length - 1) {
    num /= 1000;
    unitIndex++;
  }
  if (unitIndex == 0) return num.toFixed(0);
  return num.toFixed(1) + units[unitIndex];
}

function boundarySetup() {
  let boundary = new Sprite(
    canvas.w / 2,
    canvas.h / 2,
    canvas.w,
    canvas.h,
    "static"
  );
  boundary.color = 255;
  boundary.shape = "chain";
}

function draw() {
  background(255);

  if (frameCount % 60 == 0) {
    deletedChars +=
      autoClicksPerSecond *
      rageModeMultiplier *
      scrumMultiplier *
      coffeeBreakMultiplier;
  }

  // Draw the user's current amount of deleted characters
  fill(0);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(
    `${compressNumber(deletedChars)} Chars`,
    width / 2,
    height / 2 - backspaceH
  );
  textSize(24);
  text(
    `${compressNumber(autoClicksPerSecond * rageModeMultiplier)} per second`,
    width / 2,
    height / 2 - backspaceH / 1.5
  );
  textSize(14);
  textAlign(LEFT, LEFT);

  checkAchievements();
  drawAchievements();

  animateBackspace();

  backgroundDraw();

  rageModeDraw();

  callRandomEvents();
  checkGravityMode();
  checkScrum();
  checkCoffeeBreak();

  upgradeMouseInteraction();
}
