import { Vacuum } from "./models/Vacuum";
import { productInfo } from "./Products";


export let cartItems: Vacuum[] = [];

export function addToCart(clicked: number) {  

    if (cartItems.length == 0) {
      for (let i = 0; 0 == cartItems.length; i++) {
  
        cartItems.push(productInfo[clicked])
        console.log("hmmm");
        
      }
    } else{
    
      for (let i = 0; i < cartItems.length; i++) {
      
        if (productInfo[clicked] === cartItems[i]) {

          console.log(productInfo[clicked]);
          console.log(cartItems[i]);
          
        
        productInfo[clicked].amount++;     
        console.log("Plussar på amount");
   
  
      } 
      else {
        cartItems.push(productInfo[clicked])
        console.log("Lägger till i lista");
          
       }
      }
    }
  
    console.log(cartItems);
    
  }