class BaseClass {

}

interface Entity {
    id: number;
}

interface ItemInterface {
    description: string;
    price: number;
    calculateTax(): number;
}

class AnotherRealItem extends BaseClass implements ItemInterface, Entity {
    id: number;
    description: string;
    price: number;

    constructor(description: string, price: number) {
        super();
        this.id = Math.random();
        this.description = description;
        this.price = price;
    }

    calculateTax(): number {
        return this.price * 0.1;
    }

}