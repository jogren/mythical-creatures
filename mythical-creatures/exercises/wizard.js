class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = true;
    this.isRested = true;
    this.counter = 0;

    if (object.bearded !== undefined) {
      this.bearded = object.bearded;
    }
  }

  incantation(power) {
    return power.toUpperCase();
  }

  cast() {
    this.counter++;
    if(this.counter === 1) {
      return 'MAGIC BULLET';
    } else if(this.counter >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST!';
    } 
  }
}

module.exports = Wizard;