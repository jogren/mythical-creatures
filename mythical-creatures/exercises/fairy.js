class Fairy {
  constructor(name, object) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
  }

  receiveBelief() {
    this.dust++;
  }

  believe() {
    this.dust = this.dust + 10;
  }

  makeDresses(flowersArray) {
    ['Iris'].push(flowersArray);
  }
}

module.exports = Fairy;