class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
  }

  noticesOgre() {
    if (this.encounterCounter === 0 || this.encounterCounter % 3 !== 0) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Human;