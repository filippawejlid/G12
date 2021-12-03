class Vacuum {

    productName: string;
    price: number;
    model: string;
    id: number;
    category: string;

    constructor (name: string, price: number, model: string, Id: number, category: string) { 

        this.productName = name;
        this.price = price;
        this.model = model;
        this.id = Id;
        this.category = category;
    }
}