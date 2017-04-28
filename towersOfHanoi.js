const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3,2,1], [], []];
  }

  promptMove(cb) {
    console.log(this.stacks);
    reader.question(`From which tower?`, function (res) {
      console.log(`You want to move from tower ${res}`);
      reader.question(`To which tower?`, function (res2) {
        console.log(`You want to move to tower ${res2}`);


        console.log(`You want to move from ${fromTower} to ${toTower}.`);
        const fromTower = res;
        const toTower = res2;
        cb(res,res2);


      });
    });
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(this.stacks[startTowerIdx], this.stacks[endTowerIdx])) {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      this.print(this.stacks);
    } else {
      this.print(this.stacks);
    }
  }


  print() {
    console.log(JSON.stringify(this.stacks));
  }

  isWon() {
    if (this.stacks[0].length === 0 && (this.stacks[1].length === 3 || this.stacks[2].length === 3)) {
    return true;
    } else { return false; }
  }

  run(completionCallback) {
    this.promptMove( (move1,move2) => {
      this.move(move1,move2);
      if (this.isWon() === false) {
        this.run(completionCallback);
      } else {
      reader.close();
      completionCallback();
      }
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (startTowerIdx.length === 0) {
      return false;
    } else if (endTowerIdx.length === 0) {
      return true;
    }
    else if (startTowerIdx[startTowerIdx.length-1] < endTowerIdx[endTowerIdx.length-1]) {
      return true;
    } else {
      return false;
    }
  }
}

game = new Game;
game.run(() => console.log("You have won"));
