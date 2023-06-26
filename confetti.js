let confettiColor = [],
  confetti = [];
let confettiOn = false;
let confettiTimer = 0;
let confettiDuration = 180;

class Confetti {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.speed = s;
    this.time = random(0, 100);
    this.color = random(confettiColor);
    this.amp = random(2, 30);
    this.phase = random(0.5, 2);
    this.size = random(width / 50, height / 100);
    this.form = round(random(0, 1));
  }

  confettiDisplay() {
    fill(this.color);
    push();
    translate(this.x, this.y);
    translate(
      this.amp * Math.sin(this.time * this.phase),
      this.speed * Math.cos(2 * this.time * this.phase)
    );
    rotate(this.time);
    rectMode(CENTER);
    scale(Math.cos(this.time / 4), Math.sin(this.time / 4));
    if (this.form === 0) {
      rect(0, 0, this.size, this.size / 2);
    } else {
      ellipse(0, 0, this.size);
    }
    pop();

    this.time = this.time + 0.1;

    this.speed += 1 / 200;

    this.y += this.speed;
  }
}

function confettiSetup() {
  confettiColor = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
  ];
  for (let i = 0; i < 500; i++) {
    confetti[i] = new Confetti(
      random(0, width),
      random(-height, 0),
      random(-5, 5)
    );
  }
}

function confettiEffect() {
  for (let i in confetti) {
    confetti[i].confettiDisplay();

    if (confetti[i].y > height) {
      confetti[i] = new Confetti(
        random(0, width),
        random(-height, 0),
        random(-5, 5)
      );
    }
  }
}
