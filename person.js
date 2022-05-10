class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  hello() {
    const stringsObjects = {
      intro: (name, age, gender) =>
        `Hello, my name is ${name}, my gender is ${gender} and I am ${age} years old.`,
      oneInterest: (intro, interests) =>
        `${intro} My interest is ${interests}.`,
      noInterests: (intro) => `${intro} I have no interests.`,
      multipleInterests: (intro, arr) => {
        const space = " ";
        let stringFormat = "";

        for (let i = 0; i < arr.length; i++) {
          if (i > 0) {
            arr[i] = space + arr[i];
          }
        }
		
        if (arr.length > 1) {
          const lastWord = arr.pop();
          stringFormat = arr + " and" + lastWord;
        }
        return `${intro} My interests are ${stringFormat}.`;
      },
    };
    const intro = stringsObjects.intro(this.name, this.age, this.gender);

    if (!this.interests || this.interests == 0) {
      return stringsObjects.noInterests(intro);
    } else if (this.interests.length == 1) {
      return stringsObjects.oneInterest(intro, this.interests);
    } else {
      return stringsObjects.multipleInterests(intro, this.interests);
    }
  }
}
const person = new Person("Ryan", 30, "male", [1, 2, 3]);
const greetings = person.hello();
console.log(greetings);