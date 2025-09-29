class Animal {
    constructor (animalName, animalSound) {
        this.animalName = animalName;
        this.animalSound = animalSound;
    }
    name() {
        return `${this.animalName}`;
    }
    speak() {
        return `${this.animalName} speaks!.`;
    }
}

class Dog extends Animal {
  speak() {
    return `${this.animalName} goes ${this.animalSound}`;
  }
}
const dog = new Dog("Dog", "woof!");
console.log(dog.speak()); // Dog goes woof!
console.log(dog.name()); //class inheritence.


console.log(dog instanceof Dog);         // true, dog created using Dog class
console.log(dog instanceof Animal);      // true, inherits from Animal class
