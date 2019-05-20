class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(familyMember) {
    if (this.home === familyMember.location && this.starksToProtect.length < 2) {
    this.starksToProtect.push(familyMember);
    familyMember.safe = true;
    this.huntsWhiteWalkers = false;
    }
  }

  leave(familyMember) {
    this.starksToProtect.pop();
    familyMember.safe = false;
  }
}

module.exports = Direwolf;
