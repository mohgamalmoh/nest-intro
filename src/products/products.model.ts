export class Product {
    id: string;
    title: string
    price: number
    constructor(id: string, title: string, price: number) {
        this.id = id;
        this.title = title;
        this.price = price;
    };
}