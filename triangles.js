function right(num) {
  let string = "";

  if (num > 0) {
    for (let i = 0; i < num; i++) {
      for (let space = 1; space < num - i; space++) {
        string += " ";
      }
      for (let char = 1; char <= i + 1; char++) {
        string += "#";
      }
      console.log(string);
      string = "";
    }
  }

  if (num < 0) {
    num = Math.sqrt(num * num);

    for (let i = 0; i < num; i++) {
      for (let space = 1; space <= i; space++) {
        string += " ";
      }
      for (let char = 1; char <= num - i; char++) {
        string += "#";
      }
      console.log(string);
      string = "";
    }
  }
}

function left(num) {
  let string = "";

  while (num > 0) {
    string += "#";
    num--;
    console.log(string);
  }

  if (num < 0) {
    num = Math.sqrt(num * num);
  }

  while (num > 0) {
    for (let i = 0; i < num; i++) {
      string += "#";
    }
    console.log(string);
    string = "";
    num--;
  }
}

function isosceles(number) {
  let space = "";
  let totalNumberOfSpaces;
  let numberOfCharectors;
  let numberOfSpaces;
  let string = "";
  let lengthOfString = number * 2 - 1;

  while (number > 0) {
    string += "#";

    if (string.length < lengthOfString) {
      totalNumberOfSpaces = lengthOfString - string.length;
      numberOfSpaces = totalNumberOfSpaces / 2;
    }

    for (let i = 0; i < numberOfSpaces; i++) {
      space += " ";
    }
    if (string.length === lengthOfString) {
      console.log(string);
    } else {
      console.log(space + string);
    }

    space = "";
    string = string + "#";
    number--;
  }

  if (number < 0) {
    number = Math.sqrt(number * number);

    lengthOfString = number * 2 - 1;
    numberOfCharectors = lengthOfString;

    while (number > 0) {
      for (let i = 0; i < numberOfCharectors; i++) {
        string += "#";
      }
      if (string.length < lengthOfString) {
        totalNumberOfSpaces = lengthOfString - string.length;
        numberOfSpaces = totalNumberOfSpaces / 2;
      }

      for (let i = 0; i < numberOfSpaces; i++) {
        space += " ";
      }
      if (string.length == lengthOfString) {
        console.log(string);
      } else {
        console.log(space + string);
      }

      string = "";
      space = "";
      numberOfCharectors = numberOfCharectors - 2;
      number--;
    }
  }
}

function triangle(num, mode) {
  switch (mode) {
    case "right":
      right(num);
      break;
    case "isosceles":
      isosceles(num);
      break;
    case "left":
      left(num);
      break;
    default:
      left(num);
      break;
  }
}

triangle(-4, "right");
triangle(4, "right");
triangle(-4, "isosceles");
triangle(4, "isosceles");
triangle(-4);
triangle(4);
triangle(-4, "left");
triangle(4, "left");