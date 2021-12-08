import { cartItems } from "./addToCart";

export function checkoutCart(){

let checkout: HTMLDivElement = document.getElementById("checkoutCart") as HTMLDivElement;
// checkout.innerHTML = " ";

for (let i = 0; i < cartItems.length; i++) {
  let productContainer: HTMLDivElement = document.createElement("div");
  productContainer.className = "productContainer";
  
  let imgContainer: HTMLDivElement = document.createElement("div");
    imgContainer.className = "imgContainer";
    let img: HTMLImageElement = document.createElement("img");
  
    let info: HTMLDivElement = document.createElement("div");
    info.className= "info";
    
    let productName: HTMLHeadingElement = document.createElement("h3");
    
    let amountDiv: HTMLDivElement = document.createElement("div");
    amountDiv.id = "amount"
    let amountspan: HTMLSpanElement = document.createElement("span");
    
    let priceDiv: HTMLDivElement = document.createElement("div");
    priceDiv.id = "price"
    let priceSpan: HTMLSpanElement = document.createElement("span");
    
    checkout.appendChild(productContainer);
    checkout.appendChild(productContainer)
    productContainer.appendChild(imgContainer);
    productContainer.appendChild(info);
    
    imgContainer.appendChild(img);
    
    info.appendChild(productName);
    info.appendChild(amountDiv);
    info.appendChild(priceDiv);
    
    amountDiv.appendChild(amountspan);
    
    priceDiv.appendChild(priceSpan);   
    
    img.src = cartItems[i].imgsmall;
    productName.innerHTML = cartItems[i].productName;
    amountspan.innerHTML = `Antal: ${cartItems[i].amount.toString()}`;
    priceSpan.innerHTML = `${cartItems[i].price.toString()} kr`;

}

}