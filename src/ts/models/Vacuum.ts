export class Vacuum {
  productName: string;
  price: number;
  imghero: string;
  imgsmall: string;
  discriptionlandpageh2: string;
  discriptionlandpagespan: string;
  discriptioninfopage1: string;
  discriptioninfopage2: string;
  readmorebtn: string;
  addtocartbtn: string;
  id: number;
  category: string;
  amount: number;

  constructor(
    name: string,
    price: number,
    imghero: string,
    imgsmall: string,
    discriptionlandpageh2: string,
    discriptionlandpagespan: string,
    discriptioninfopage1: string,
    discriptioninfopage2: string,
    readmorebtn: string,
    addtocartbtn: string,
    id: number,
    category: string,
    amount: number

  ) {
    this.productName = name;
    this.price = price;
    this.imghero = imghero;
    this.imgsmall = imgsmall;
    this.discriptionlandpageh2 = discriptionlandpageh2;
    this.discriptionlandpagespan = discriptionlandpagespan;
    this.discriptioninfopage1 = discriptioninfopage1;
    this.discriptioninfopage2 = discriptioninfopage2;
    this.readmorebtn = readmorebtn;
    this.addtocartbtn = addtocartbtn;
    this.id = id;
    this.category = category;
    this.amount = amount;
  }
}
