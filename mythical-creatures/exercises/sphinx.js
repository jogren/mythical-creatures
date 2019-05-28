class Sphinx {
  constructor() {
    this.name = null;
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(words) {
    this.riddles.push(words);
    if(this.riddles.length >= 4) {
      this.riddles.shift();
    }
  }

  attemptAnswer(answer) {
    for(var i = 0; i < this.riddles.length; i++) {
      if(this.riddles[i].answer === answer) {
        this.riddles.splice(i, 1);
      }
      if (this.riddles.length === 0) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
      }
    }
    this.heroesEaten++;
    return 'That wasn\'t that hard, I bet you don\'t get the next one'
  }
}

module.exports = Sphinx;