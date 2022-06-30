class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  sound() {
    return `sound...`;
  }
  eat() {
    return `${this.#name} eats`;
  }
}

class Dog extends Animal {
  constructor(name = "Rax") {
    super(name);
  }

  sound() {
    return `Bark`;
  }
}

class Cat extends Animal {
  constructor(name = "Storm") {
    super(name);
  }

  sound() {
    return `Meow`;
  }
}

class Home {
  constructor() {
    this.petsArr = [];
  }
  adoptPet(pet) {
    this.petsArr.push(pet);
  }
  makeAllSounds() {
    for (let i = 0; i < this.petsArr.length; i++) {
     return this.petsArr[i].sound();
    }
  }
}

const home = new Home();
const dog1 = new Dog();
const dog2 = new Dog();
const cat = new Cat();

home.makeAllSounds();
home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
console.log(home.makeAllSounds());
console.log(home.petsArr);

home.adoptPet(dog2);
home.makeAllSounds();
