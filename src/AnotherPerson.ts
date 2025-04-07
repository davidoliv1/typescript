class AnotherEntity {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }
}

class AnotherPerson extends AnotherEntity {
    constructor(public name: string, private age: number) {
        super(100);
    }
}

const anotherPerson = new AnotherPerson("David", 25);
console.log(anotherPerson.name);
console.log(anotherPerson);