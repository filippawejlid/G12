import { cartItems } from "./addToCart";
//import { minusItem } from "./minusitem";
//import { addmore } from "./minusitem";

export function displayCart() {
  let total: HTMLSpanElement = document.getElementById(
    "totalSpan"
  ) as HTMLSpanElement;
  total.className = "totalSpans";
  total.innerHTML = " ";
  let modal: HTMLDivElement = document.getElementById(
    "displayCartModal"
  ) as HTMLDivElement;
  modal.innerHTML = " ";
  let sumList: number[] = [];

  for (let i = 0; i < cartItems.length; i++) {
    //Skapa alla element som produktens info ska ligga i

    let productContainer: HTMLDivElement = document.createElement("div");
    productContainer.className = "productContainer";
    productContainer.id = "productContainer";

    let imgContainer: HTMLDivElement = document.createElement("div");
    imgContainer.className = "imgContainer";

    let info: HTMLDivElement = document.createElement("div");
    info.className = "info";

    let adjustments: HTMLDivElement = document.createElement("div");
    adjustments.className = "adjustments";
    let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
    trashCan.id = "trasher";
    trashCan.className = "fa fa-trash";
    trashCan.ariaHidden = "true";

    // trashCan.addEventListener("click", () => {
    //   minusItem();
    // });

    // PLUS FÖR ATT LÄGGA TILL FLER PRODUKTER
    let plus = document.createElement("i");
    plus.className = "plus";
    plus.innerHTML = "<i class='far fa-plus-square'></i>";
    // plus.addEventListener("click", () => {
    //   addmore();
    // });

    let minus = document.createElement("i");
    minus.className = "minus";
    minus.innerHTML = "<i class='far fa-minus-square'></i>";

    let productName: HTMLHeadingElement = document.createElement("h3");

    let amountDiv: HTMLDivElement = document.createElement("div");
    amountDiv.className = "class";
    let amountspan: HTMLSpanElement = document.createElement("span");
    amountspan.id = "amount" + i;

    let priceDiv: HTMLDivElement = document.createElement("div");
    priceDiv.id = "price" + i;
    priceDiv.className = "price";
    let priceSpan: HTMLSpanElement = document.createElement("span");

    // APPENDCHILD
    modal.appendChild(productContainer);
    productContainer.appendChild(imgContainer);
    productContainer.appendChild(info);
    productContainer.appendChild(adjustments);

    adjustments.appendChild(trashCan);
    adjustments.appendChild(plus);
    adjustments.appendChild(minus);

    info.appendChild(productName);
    info.appendChild(amountDiv);
    info.appendChild(priceDiv);

    amountDiv.appendChild(amountspan);

    priceDiv.appendChild(priceSpan);

    imgContainer.innerHTML = cartItems[i].imgsmall;
    productName.innerHTML = cartItems[i].productName;
    amountspan.innerHTML = `Antal: ${cartItems[i].amount.toString()}`;
    priceSpan.innerHTML = `${cartItems[i].price.toString()} kr`;

    sumList.push(cartItems[i].price * cartItems[i].amount);
  }

  //Räkna ut total

  let sum = sumList.reduce(function (a, b) {
    return a + b;
  }, 0);

  total.innerHTML = `${sum.toString()} kr`;

  // console.log(sum);
}
