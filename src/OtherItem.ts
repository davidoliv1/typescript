abstract class OtherItem {
    description: string;
    price: number;

    constructor(description: string, price: number) {
        this.description = description;
        this.price = price;
    }

    calculateTax() {
        return this.price * this.getTax();
    }

    abstract getTax(): number;
}

class OtherRealItem extends OtherItem {
    getTax(): number {
        return 0.2;
    }

}

const otherItem = new OtherRealItem("Book", 100);
console.log(otherItem.calculateTax());