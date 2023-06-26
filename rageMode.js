let rageModeActive = false;
let rageModeUnlocked = false;
let rageModeTimer = 0;
let rageModeTime = 1800;
let rageModeChance = 0.1;
let rageModeMultiplier = 1;

function rageModeDraw() {
  if (rageModeUnlocked && !rageModeActive) {
    if (frameCount % 1800 == 0 && random() > 0.1) {
      rageModeActive = true;
      rageModeTimer = 0;
    }
  }

  if (rageModeActive) {
    if (rageModeTimer < rageModeTime) {
      rageModeTimer++;
      translate(random(-2, 2), random(-2, 2));
      rageModeMultiplier = 10;
      fill(255, 140, 170, 150);
      textSize(80);
      textAlign(CENTER, CENTER);
      text("RAGE MODE", width / 2, height / 7);
    } else {
      rageModeTimer = 0;
      rageModeActive = false;
      rageModeMultiplier = 1;
    }
  }
}
