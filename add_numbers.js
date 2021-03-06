const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  reader.question("What is your number?", function(answer) {
      sum += parseInt(answer);
      console.log(sum);
      numsLeft -= 1;
      if (numsLeft === 0 ) {
        completionCallback(sum);
        reader.close();
      } else {
        addNumbers(sum, numsLeft, completionCallback);
    }
  });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
