class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  }

  shoot() {
    this.counter++;
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Twang!!!';
    }
  }

  run() {
    this.counter++;
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    } else {
      return 'Clop clop clop clop!!!';
    }
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ'
    } else {
    return 'NO!';
    }
  }

  layDown() {
    if (this.standing) {
      this.standing = false;
      this.layingDown = true;
    }
  }

  standUp() {
    if (this.layingDown) {
      this.standing = true;
      this.layingDown = false;
    }
  }

  drinkPotion() {
    this.cranky = false;

    if (this.layingDown) {
      return 'Not while I\'m laying down!';
    }

    if (this.counter < 3) {
      this.cranky = true;
    }
  }
}


module.exports = Centaur;