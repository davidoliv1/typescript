class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("David Oliveira", 25);
console.log(person);

const persons: Person[] = [];

persons[0] = person;
persons[1] = {name: 'David', age: 25}

console.log(persons);