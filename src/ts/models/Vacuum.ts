export class Vacuum {

    productName: string;
    img: string;
    price: number;
    info: string;
    category: string;

    constructor (name: string, img: string, price: number, info: string, category: string) { 

        this.productName = name;
        this.img = img;
        this.price = price;
        this.info = info;
        this.category = category;
    }
}