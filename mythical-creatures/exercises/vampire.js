class Vampire {
  constructor(name, pet) {
    this.name = name;

    if(pet !== undefined) {
      this.pet = pet; 
    } else {
      this.pet = 'bat';
    }

    this.thirsty = true;
  }

  drink() {
      if (this.thirsty === true) {
        return this.thirsty = false;
      } 
    }
}

module.exports = Vampire;
