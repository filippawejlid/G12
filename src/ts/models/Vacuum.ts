export class Vacuum {
  productName: string;
  price: number;
  imghero: string;
  imgsmall: string;
  discriptionlandpageh2: string;
  discriptionlandpagespan: string;
  ppinfoheroheader: string;
  h1nfopage1: string;
  discriptioninfopage1: string;
  h1infopage2: string;
  discriptioninfopage2: string;
  readmorebtn: string;
  addtocartbtn: string;
  id: number;
  category: string;

  constructor(
    name: string,
    price: number,
    imghero: string,
    imgsmall: string,
    discriptionlandpageh2: string,
    discriptionlandpagespan: string,
    ppinfoheroheader: string,
    h1nfopage1: string,
    discriptioninfopage1: string,
    h1infopage2: string,
    discriptioninfopage2: string,
    readmorebtn: string,
    addtocartbtn: string,
    id: number,
    category: string
  ) {
    this.productName = name;
    this.price = price;
    this.imghero = imghero;
    this.imgsmall = imgsmall;
    this.discriptionlandpageh2 = discriptionlandpageh2;
    this.discriptionlandpagespan = discriptionlandpagespan;
    this.ppinfoheroheader = ppinfoheroheader;
    this.h1nfopage1 = h1nfopage1;
    this.discriptioninfopage1 = discriptioninfopage1;
    this.h1infopage2 = h1infopage2;
    this.discriptioninfopage2 = discriptioninfopage2;
    this.readmorebtn = readmorebtn;
    this.addtocartbtn = addtocartbtn;
    this.id = id;
    this.category = category;
  }
}
