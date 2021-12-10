import { cartItems } from "./addToCart";

export function checkoutCart(){

    let checkout = document.getElementById("checkoutCart");
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
    
      productContainer.appendChild(imgContainer);
      productContainer.appendChild(info);
        
      imgContainer.appendChild(img);
        
      info.appendChild(productName);
      info.appendChild(amountDiv);
      info.appendChild(priceDiv);
        
      amountDiv.appendChild(amountspan);
        
      priceDiv.appendChild(priceSpan);   
        

      let cartUnfinished = localStorage.getItem("cart");
      let cart = JSON.parse(cartUnfinished);

      console.log("Localstorage: " + cart);
      

      img.src = cartItems[i].imgsmall;
      productName.innerHTML = cartItems[i].productName;
      amountspan.innerHTML = `Antal: ${cartItems[i].amount.toString()}`;
      priceSpan.innerHTML = `${cartItems[i].price.toString()} kr`;
    
    }
    
    }
    