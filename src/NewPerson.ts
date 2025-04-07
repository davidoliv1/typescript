class NewEntity {
    protected id : number;

    constructor(id: number) {
        this.id = id;
    }
}

class NewPerson extends NewEntity {
    name: string;
    #age: number;
    readonly email: string;

    constructor(name: string, age: number, email: string) {
        super(100);
        this.name = name;
        this.#age = age;
        this.email = email;
    }

    calculate() {
        console.log(this.id);
    }
}

const newPerson = new NewPerson("David", 25, "david@david.com");
console.log(newPerson);