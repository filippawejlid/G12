export class Vacuum {
  productName: string;
  price: number;
  imghero: string;
  imgsmall: string;
  discriptionlandpage: string;
  discriptioninfopage1: string;
  discriptioninfopage2: string;
  id: number;
  category: string;

  constructor(
    name: string,
    price: number,
    imghero: string,
    imgsmall: string,
    discriptionlandpage: string,
    discriptioninfopage1: string,
    discriptioninfopage2: string,
    id: number,
    category: string
  ) {
    this.productName = name;
    this.price = price;
    this.imghero = imghero;
    this.imgsmall = imgsmall;
    this.discriptionlandpage = discriptionlandpage;
    this.discriptioninfopage1 = discriptioninfopage1;
    this.discriptioninfopage2 = discriptioninfopage2;
    this.id = id;
    this.category = category;
  }
}
