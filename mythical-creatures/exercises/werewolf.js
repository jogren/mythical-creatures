class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  };

  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;

    // if (this.human === true) {
    //   this.human = false;
    //   this.wolf = true
    //   this.hungry = true;
    // } else {
    //   this.human = true;
    //   this.wolf = false;
    //   this.hungry = false;
    // };
  };

  eat(person) {
    if (this.wolf === true) {
      person.alive = false;
      this.change();
    } else {
      return 'Human\'s don\'t eat other humans'
    }
  };
};

module.exports = Werewolf;