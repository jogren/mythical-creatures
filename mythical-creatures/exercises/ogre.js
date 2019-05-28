class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(person) {
    person.encounterCounter++;
    if (person.encounterCounter === 3) {
      this.swingAt(person);
    }
    if (person.encounterCounter === 6) {
      this.swingAt(person);
    }
  }

  swingAt(person) {
    this.swings++;
    if (this.swings === 2) {
      person.knockedOut = true;
    }
  }

  apologize(person) {
    person.knockedOut = !person.knockedOut;
  }
}

module.exports = Ogre;