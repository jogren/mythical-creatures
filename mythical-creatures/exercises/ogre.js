class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
  }

  encounter(person) {
    person.encounterCounter++;
  }
}

module.exports = Ogre;