import { Dog } from './09-protected';

abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  doSomething() {
    console.log('Dooo');
  }
}

// const animal = new Animal('Elite'); // error
// animal.greeting();

const cheis = new Dog('Cheis', 'Diego');
cheis.greeting();
cheis.woof(2);
