let upgrade,
  fasterTyping,
  stickyKeys,
  doublePress,
  autoComplete,
  rageMode,
  codeReview,
  multitasking;
const upgradesYIndent = 10;
const upgradesW = 120;
const upgradesH = 50;

function upgradesSetup() {
  let upgradesX = canvas.w / 10;

  upgrade = new Group();
  upgrade.width = upgradesW;
  upgrade.height = upgradesH;
  upgrade.color = color(200, 200, 200);

  // User click upgrades
  fasterTyping = new upgrade.Sprite(upgradesX, height / 6);
  fasterTyping.name = "TypeFaster";
  fasterTyping.price = 50;
  fasterTyping.amt = 0;
  fasterTyping.desc = `x2 User Clicks (One-Time Purchase)\nCost: ${fasterTyping.price} chars`;
  fasterTyping.text = `${fasterTyping.name} x${fasterTyping.amt}`;
  fasterTyping.click = function () {
    userClickMultiplier *= 2;
    fasterTyping.locked = true;
  };

  doublePress = new upgrade.Sprite(
    upgradesX,
    height / 6 + (upgradesYIndent + upgradesH)
  );
  doublePress.name = "DoublePress";
  doublePress.price = 300;
  doublePress.amt = 0;
  doublePress.desc = `x3 User Clicks (One-Time Purchase)\nCost: ${doublePress.price} chars`;
  doublePress.text = `${doublePress.name} x${doublePress.amt}`;
  doublePress.click = function () {
    userClickMultiplier *= 3;
    doublePress.locked = true;
  };

  multitasking = new upgrade.Sprite(
    upgradesX,
    height / 6 + 2 * (upgradesYIndent + upgradesH)
  );
  multitasking.name = "Multitasking";
  multitasking.price = 5000;
  multitasking.amt = 0;
  multitasking.desc = `x5 User Clicks (One-Time Purchase)\nCost: ${multitasking.price} chars`;
  multitasking.text = `${multitasking.name} x${multitasking.amt}`;
  multitasking.click = function () {
    userClickMultiplier *= 5;
    multitasking.locked = true;
  };

  stickyKeys = new upgrade.Sprite(
    upgradesX,
    height / 6 + 3 * (upgradesYIndent + upgradesH)
  );
  stickyKeys.name = "StickyKeys";
  stickyKeys.price = 15;
  stickyKeys.priceMultiplier = 1.6;
  stickyKeys.desc = `+1 Auto Clicks per second \n Cost: ${stickyKeys.price} chars`;
  stickyKeys.amt = 0;
  stickyKeys.text = `${stickyKeys.name} x${stickyKeys.amt}`;
  stickyKeys.click = function () {
    autoClicksPerSecond += 1;
    stickyKeys.desc = `+1 Auto Clicks per second \n Cost: ${stickyKeys.price} chars`;
  };

  autoComplete = new upgrade.Sprite(
    upgradesX,
    height / 6 + 4 * (upgradesYIndent + upgradesH)
  );
  autoComplete.name = "AutoComplete";
  autoComplete.price = 50;
  autoComplete.priceMultiplier = 1.5;
  autoComplete.amt = 0;
  autoComplete.desc = `+5 Auto Clicks\nCost: ${autoComplete.price} chars`;
  autoComplete.text = `${autoComplete.name} x${autoComplete.amt}`;
  autoComplete.click = function () {
    autoClicksPerSecond += 5;
    autoComplete.desc = `+5 Auto Clicks\nCost: ${autoComplete.price} chars`;
  };

  // Autoclick upgrades
  macro = new upgrade.Sprite(
    upgradesX,
    height / 6 + 5 * (upgradesYIndent + upgradesH)
  );
  macro.name = "Macro";
  macro.price = 1000;
  macro.priceMultiplier = 1.4;
  macro.desc = `+10 Auto Clicks per second \n Cost: ${macro.price} chars`;
  macro.amt = 0;
  macro.text = `${macro.name} x${macro.amt}`;
  macro.click = function () {
    autoClicksPerSecond += 10;
    macro.desc = `+10 Auto Clicks per second \n Cost: ${macro.price} chars`;
  };

  pyGUI = new upgrade.Sprite(width - upgradesX, height / 6);
  pyGUI.name = "pyGUI";
  pyGUI.price = 2000;
  pyGUI.priceMultiplier = 1.3;
  pyGUI.amt = 0;
  pyGUI.desc = `+25 Auto Clicks\nCost: ${pyGUI.price} chars`;
  pyGUI.text = `${pyGUI.name} x${pyGUI.amt}`;
  pyGUI.click = function () {
    autoClicksPerSecond += 25;
    pyGUI.desc = `+25 Auto Clicks\nCost: ${pyGUI.price} chars`;
  };

  unpaidIntern = new upgrade.Sprite(
    width - upgradesX,
    height / 6 + (upgradesYIndent + upgradesH)
  );
  unpaidIntern.name = "UnpaidIntern";
  unpaidIntern.price = 50000;
  unpaidIntern.priceMultiplier = 1.2;
  unpaidIntern.amt = 0;
  unpaidIntern.desc = `+50 Auto Clicks\nCost: ${unpaidIntern.price} chars`;
  unpaidIntern.text = `${unpaidIntern.name} x${unpaidIntern.amt}`;
  unpaidIntern.click = function () {
    autoClicksPerSecond += 50;
    unpaidIntern.desc = `+50 Auto Clicks\nCost: ${unpaidIntern.price} chars`;
  };

  chatGPT = new upgrade.Sprite(
    width - upgradesX,
    height / 6 + 2 * (upgradesYIndent + upgradesH)
  );
  chatGPT.name = "ChatGPT";
  chatGPT.price = 100000;
  chatGPT.priceMultiplier = 1.1;
  chatGPT.amt = 0;
  chatGPT.desc = `+100 Auto Clicks\nCost: ${chatGPT.price} chars`;
  chatGPT.text = `${chatGPT.name} x${chatGPT.amt}`;
  chatGPT.click = function () {
    autoClicksPerSecond += 100;
    chatGPT.desc = `+100 Auto Clicks\nCost: ${chatGPT.price} chars`;
  };

  rageMode = new upgrade.Sprite(
    width - upgradesX,
    height / 6 + 3 * (upgradesYIndent + upgradesH)
  );
  rageMode.name = "Rage";
  rageMode.price = 50000;
  rageMode.amt = 0;
  rageMode.desc = `Chance for a 10s boost(One-Time Purchase)\nCost: ${rageMode.price} chars`;
  rageMode.text = `${rageMode.name} x${rageMode.amt}`;
  rageMode.click = function () {
    rageModeUnlocked = true;
    rageMode.locked = true;
  };

  codeReview = new upgrade.Sprite(
    width - upgradesX,
    height / 6 + 4 * (upgradesYIndent + upgradesH)
  );
  codeReview.name = "CodeReview";
  codeReview.price = 10000;
  codeReview.amt = 0;
  codeReview.desc = `Increase Random Event Chance (One-Time Purchase)\nCost: ${codeReview.price} chars`;
  codeReview.text = `${codeReview.name} x${codeReview.amt}`;
  codeReview.click = function () {
    eventChance *= 1.3;
    codeReview.locked = true;
  };

  for (let i = 0; i < upgrade.length; i++) {
    let currentUpgrade = upgrade[i];
    currentUpgrade.InitialX = currentUpgrade.position.x
    currentUpgrade.InitialY = currentUpgrade.position.y
  }
}

function upgradeMouseInteraction() {
  for (let i = 0; i < upgrade.length; i++) {
    let currentUpgrade = upgrade[i];

    if (currentUpgrade.mouse.dragging() && gravityModeOn) {
      currentUpgrade.moveTowards(
        mouse.x + currentUpgrade.mouse.x,
        mouse.y + currentUpgrade.mouse.y,
        1
      );
    }

    if (currentUpgrade.locked) {
      if (currentUpgrade.mouse.hovering()) {
        currentUpgrade.color = color(255, 100, 100);
        let textW = textWidth(currentUpgrade.desc);
        let textX = mouseX + currentUpgrade.width;
        if (textX + textW > width) {
          textX = mouseX - textW;
        }
        fill(0);
        text(`LOCKED\n${currentUpgrade.desc}`, textX, mouseY);
      } else {
        currentUpgrade.color = color(200, 150, 150);
      }
    } else if (deletedChars >= currentUpgrade.price) {
      currentUpgrade.color = color(150, 200, 150);
      if (currentUpgrade.mouse.hovering()) {
        currentUpgrade.color = color(100, 255, 100);
        let textW = textWidth(currentUpgrade.desc);
        let textX = mouseX + currentUpgrade.width;
        if (textX + textW > width) {
          textX = mouseX - textW;
        }
        fill(0);
        text(currentUpgrade.desc, textX, mouseY);
      }
      if (currentUpgrade.mouse.pressed()) {
        deletedChars -= currentUpgrade.price;
        currentUpgrade.amt++;
        currentUpgrade.price = round(
          currentUpgrade.price * currentUpgrade.priceMultiplier
        );
        currentUpgrade.priceMultiplier *= random(
          1,
          currentUpgrade.priceMultiplier
        );
        currentUpgrade.text = `${currentUpgrade.name} x${currentUpgrade.amt}`;
        currentUpgrade.click();
      }
    } else {
      currentUpgrade.color = color(200);
      if (currentUpgrade.mouse.hovering()) {
        currentUpgrade.color = color(150);
        let textW = textWidth(currentUpgrade.desc);
        let textX = mouseX + currentUpgrade.width;
        if (textX + textW > width) {
          textX = mouseX - textW;
        }
        fill(0);
        text(`Not enough chars\n${currentUpgrade.desc}`, textX, mouseY);
      }
    }
  }
}
