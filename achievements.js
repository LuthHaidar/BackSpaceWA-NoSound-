var achievements = {
  firstDelete: {
    requirement: 1,
    reward: "Confetti for your first delete!",
    completed: false,
  },
  speedyDeleter: {
    requirement: 100,
    reward: "You're a speedy deleter!",
    completed: false,
  },
  backspaceMaster: {
    requirement: 1000,
    reward: "Master of the backspace key!",
    completed: false,
  },
  codeNinja: {
    requirement: 5000,
    reward: "You're a coding ninja!",
    completed: false,
  },
  ultimateDeveloper: {
    requirement: 10000,
    reward: "Ultimate developer achieved!",
    completed: false,
  },
};

let achievementTimer = 0;
let achievementDuration = 600;
let achievementOn = false;

function checkAchievements() {
  for (const achievement in achievements) {
    const currentAchievement = achievements[achievement];
    if (
      !currentAchievement.completed &&
      currentAchievement.requirement <= deletedChars
    ) {
      currentAchievement.completed = true;
      fill(140, 170, 255, 200);
      textAlign(CENTER, CENTER);
      textSize(40);
      text(currentAchievement.reward, width / 2, height / 7);
      achievementOn = true;
    }
  }
}

function drawAchievements() {
  if (achievementOn && achievementTimer < achievementDuration) {
    achievementTimer++;
    fill(140, 170, 255, 200);
    textAlign(CENTER, CENTER);
    textSize(30);
    var lastCompletedAchievement;
    for (var achievement in achievements) {
      if (achievements[achievement].completed) {
        lastCompletedAchievement = achievements[achievement];
      }
    }
    text(lastCompletedAchievement.reward, width / 2, height / 7);
    textSize(20);
    text(
      `${lastCompletedAchievement.requirement} characters deleted`,
      width / 2,
      height / 7 + 30
    );
    confettiEffect();
  } else if (achievementOn && achievementTimer == achievementDuration) {
    achievementTimer = 0;
    achievementOn = false;
  }
}
