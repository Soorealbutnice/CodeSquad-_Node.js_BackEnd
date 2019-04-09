let Marine = require('./Marine');

let marineA = new Marine('marineA', 100, 20);
let marineB = new Marine('marineB', 100, 20);

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

while ( marineA.hp > 0 && marineB.hp > 0) {
    let num = getRandomIntInclusive(1,2);

    if (num == 1) {
        marineA.Attack(marineB);
    } else {
        marineB.Attack(marineA);
    }

}

