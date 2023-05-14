export class Animal {
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

export class Dog extends Animal {
  constructor(name: string, public owner: string) {
    super(name);
  }

  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`woof! ${this.name}`);
    }
  }

  move() {
    console.log('moving as a dog');
  }
}

const cheis = new Dog('cheis', 'Diego');
// cheis.name = 'otro';
cheis.woof(1);
