// import { Order } from "./models/Order";
// // import { cart } from "./checkout";
// import { Vacuum } from "./models/Vacuum";


// export function checkoutCart(){

//     let total: HTMLSpanElement = document.getElementById(
//   		"totalSpanCheckout"
//   	) as HTMLSpanElement;
//     total.className = "totalSpans";
//   	total.innerHTML = " ";
//   	let sumList: number[] = [];
//     let checkout: HTMLDivElement = document.getElementById("checkoutCart") as HTMLDivElement;
//     checkout.innerHTML = " ";
    
//     for (let i = 0; i < cartItems.length; i++) {
//       let productContainer: HTMLDivElement = document.createElement("div");
//       productContainer.className = "productContainer";
      
//       let imgContainer: HTMLDivElement = document.createElement("div");
//       imgContainer.className = "imgContainer";
      
//       let info: HTMLDivElement = document.createElement("div");
//       info.className= "info";
      
//       let productName: HTMLHeadingElement = document.createElement("h3");
        
//       let amountDiv: HTMLDivElement = document.createElement("div");
//       amountDiv.id = "amount"
//       let amountspan: HTMLSpanElement = document.createElement("span");
        
//       let priceDiv: HTMLDivElement = document.createElement("div");
//       priceDiv.id = "price"
//       let priceSpan: HTMLSpanElement = document.createElement("span");
        
//       checkout.appendChild(productContainer); 
    
//       productContainer.appendChild(imgContainer);
//       productContainer.appendChild(info);
                
//       info.appendChild(productName);
//       info.appendChild(amountDiv);
//       info.appendChild(priceDiv);
        
//       amountDiv.appendChild(amountspan);
        
//       priceDiv.appendChild(priceSpan);   

      

//       imgContainer.innerHTML = cartItems[i].imgsmall;
//       productName.innerHTML = cartItems[i].productName;
//       amountspan.innerHTML = `Antal: ${cartItems[i].amount.toString()}`;
//       priceSpan.innerHTML = `${cartItems[i].price.toString()} kr`;
    
//       sumList.push(cartItems[i].price * cartItems[i].amount);
//     }
  
//     //Räkna ut total
  
//     let sum = sumList.reduce(function (a, b) {
//       return a + b;
//     }, 0);
  
//     total.innerHTML = `${sum.toString()} kr`;
//     }
    