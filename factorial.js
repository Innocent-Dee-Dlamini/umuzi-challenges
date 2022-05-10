//return factorial
let factorial = 1;

function firstFactorial(number){
  while (number >= 1){
    factorial = factorial * number;
    number --;
  }
  console.log(factorial);
}

firstFactorial(4);

