let gravityModeTimer = 0;
let gravityModeDuration = 1800;
let gravityModeOn = false;

function gravityMode() {
  gravityModeOn = true;
}

function checkGravityMode() {
  if (gravityModeOn && gravityModeTimer < gravityModeDuration) {
    world.gravity.y = 10;
    allSprites.collider = 'dynamic';
    boundarySetup.collider = 'static'
    gravityModeTimer++;
    fill(170, 255, 140, 200);
    textAlign(CENTER, CENTER);
    textSize(80);
    text("FALL", width / 2, height / 7);
  } else if (gravityModeOn && gravityModeTimer == gravityModeDuration) {
    reverseGravityMode();
    gravityModeTimer = 0;
    gravityModeOn = false;
  }
}

function reverseGravityMode() {
  world.gravity.y = 0;
  backspace.collider = "static";
  backspace.position.x = backspace.InitialX;
  backspace.position.y = backspace.InitialY;
  for (let i = 0; i < upgrade.length; i++) {
    let currentUpgrade = upgrade[i];
    currentUpgrade.collider = 'static';
    currentUpgrade.x = currentUpgrade.InitialX;
    currentUpgrade.y = currentUpgrade.InitialY;
  }
  allSprites.rotation = 0;
}

let scrumTimer = 0;
let scrumDuration = 600;
let scrumOn = false;
let scrumMultiplier = 1;

function scrum() {
  scrumOn = true;
}

function checkScrum() {
  if (scrumOn && scrumTimer < scrumDuration) {
    scrumTimer++;
    scrumMultiplier = 0.5;
    fill(170, 255, 140, 200);
    textAlign(CENTER, CENTER);
    textSize(80);
    text("SCRUM", width / 2, height / 7);
    textSize(20);
    text(`Autoclicks slowed down`, width / 2, height / 7 + 40);
  } else if (scrumOn && scrumTimer == scrumDuration) {
    scrumTimer = 0;
    scrumMultiplier = 1;
    scrumOn = false;
  }
}

let coffeeBreakTimer = 0;
let coffeeBreakDuration = 600;
let coffeeBreakOn = false;
let coffeeBreakMultiplier = 1;

function coffeeBreak() {
  coffeeBreakOn = true;
}

function checkCoffeeBreak() {
  if (coffeeBreakOn && coffeeBreakTimer < coffeeBreakDuration) {
    coffeeBreakTimer++;
    coffeeBreakMultiplier = 10;
    fill(170, 255, 140, 200);
    textAlign(CENTER, CENTER);
    textSize(80);
    text("COFFEE BREAK", width / 2, height / 7);
    textSize(20);
    text(`All clicks boosted`, width / 2, height / 7 + 40);
  } else if (coffeeBreakOn && coffeeBreakTimer == coffeeBreakDuration) {
    coffeeBreakTimer = 0;
    coffeeBreakMultiplier = 1;
    coffeeBreakOn = false;
  }
}

let randomEvents = [scrum, coffeeBreak, gravityMode];
let eventChance = 0.02;

function callRandomEvents() {
  if (frameCount % 3600 == 0 && Math.random() <= eventChance) {
    randomEvents[Math.floor(Math.random() * randomEvents.length)]();
  }
}
