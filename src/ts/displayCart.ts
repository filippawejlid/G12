import { cartItems } from "./addToCart";
import { productInfo } from "./Products";


export function displayCart() {
    for (let i = 0; i < cartItems.length; i++) {
      let modalContent: HTMLDivElement = document.getElementById(
        "prodFrame1"
      ) as HTMLDivElement;
  
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
      let span: HTMLSpanElement = document.createElement("span");
      let amountspan: HTMLSpanElement = document.createElement("span");
      
      let priceDiv: HTMLDivElement = document.createElement("div");
      priceDiv.id = "price"
      let span2: HTMLSpanElement = document.createElement("span");
      let priceSpan: HTMLSpanElement = document.createElement("span");
  
      let totalDiv: HTMLDivElement = document.createElement("div");
      totalDiv.id = "total"
      let span3: HTMLSpanElement = document.createElement("span");
      let totalSpan: HTMLSpanElement = document.createElement("span");
      
      modalContent.appendChild(productContainer);
      productContainer.appendChild(imgContainer);
      productContainer.appendChild(info);
      productContainer.appendChild(totalDiv);
  
      imgContainer.appendChild(img);
  
      info.appendChild(productName);
      info.appendChild(amountDiv);
      info.appendChild(priceDiv);
  
      amountDiv.appendChild(span);
      amountDiv.appendChild(amountspan);
      
      priceDiv.appendChild(span2);
      priceDiv.appendChild(priceSpan);
  
      totalDiv.appendChild(span3)
      totalDiv.appendChild(totalSpan)
  
      
      img.src = cartItems[i].imgsmall;
      productName.innerHTML = cartItems[i].productName;
      amountspan.innerHTML = `${productInfo[i].amount.toString()} kr`;
      priceSpan.innerHTML = `${productInfo[i].price.toString()} kr`;
  
    }
  }
