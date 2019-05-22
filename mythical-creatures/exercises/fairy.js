class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust++;
  };

  believe() {
    this.dust = this.dust + 10;
  };

  makeDresses(flowersArray) {
    this.clothes.dresses = this.clothes.dresses.concat(flowersArray);
  };

  provoke() {
    this.disposition = 'Vengeful';
  };

  replaceInfant(infant) {
    this.humanWards.push(infant);
    if (this.disposition !== 'Vengeful') {
      return infant;
    } else if (this.disposition === 'Vengeful') {
      infant.disposition = 'Malicious';
    }
    if (this.humanWards.length >= 3) {
      this.disposition = 'Good natured';
    }
  }; 
};

module.exports = Fairy;