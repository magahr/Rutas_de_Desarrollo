/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
const myName = 'Nicolas';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Persona {
  private age;
  private name;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
  }

  getSumary() {
    return 'my name is ${this.name}, ${this.age}';
  }
}

const nicolas = new Persona(15, 'nicolas');