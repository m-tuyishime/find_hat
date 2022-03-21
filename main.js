const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  contructor(field) {
    this.field = field;
  }

  print() {
    console.log(this.field.join(''));
  }

  winOrLoss(i) {
    if (i == '^') {
      return 'win';
    } else if (i == 'O') {
      return loss;
    } else if (i == '░') {
      continue;
    } else {
      return 'out of bounds';
    }
  }

  userInput() {
    let input = prompt('what to do?');
    if
  }

  start() {

  }
}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);