class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("sound...");
  }

  eat() {
    console.log(`${this.name} eats`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  sound() {
    console.log("Cat meows");
  }
}

class Home {
  //declairing the petArray which will hold the home pets
  constructor(petsArr) {
    this.petsArr = petsArr;
  }
  //getpet will return an array of pets that the home class contains
  getPet() {
    return this.petsArr;
  }
  //adopt pet add a pet to the home object, the pet object must exist first
  adoptPet(pet) {
    this.petsArr.push(pet);
  }
  //create makeAllSounds wich will return the obj.sound for each animal at home
  makeAllSounds() {
    for (let i = 0; i < this.petsArr.length; i++) {
      this.petsArr[i].sound();
    }
  }
}

let danger = new Dog("Danger");
let rax = new Dog("Rax");
let storm = new Cat("Storm");

let Maseko = new Home([]);

Maseko.adoptPet(danger);
Maseko.adoptPet(storm);
Maseko.adoptPet(rax);

console.log(Maseko.getPet());
Maseko.makeAllSounds();
