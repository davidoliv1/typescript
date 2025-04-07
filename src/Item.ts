abstract class Item {
    description: string;
    price: number;

    constructor(description: string, price: number) {
        this.description = description;
        this.price = price;
    }

    abstract calculateTax(): number;
}

abstract class NewItem extends Item {

}

class RealItem extends NewItem {
    calculateTax(): number {
        return this.price * 0.1;
    }

}

const item = new RealItem("Book", 100);
console.log(item.calculateTax());