class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.name === 'Frodo' ? this.hasRing = true : this.hasRing = false;
  }

  celebrateBirthday() {
    this.age++;
    this.age >= 101 ? this.old = true : this.old = false;
    this.age >= 33 ? this.adult = true : this.adult = false;
  }
}

module.exports = Hobbit;

