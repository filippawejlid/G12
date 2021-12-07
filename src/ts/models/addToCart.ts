import { productInfo } from "./Products";
import { Vacuum } from "./Vacuum";

export let cartItems: Vacuum[] = [];

export function addToCart(clicked: number) {
  if (cartItems.length == 0) {
    for (let i = 0; 0 == cartItems.length; i++) {
      cartItems.push(productInfo[clicked]);
      console.log(productInfo[clicked]);
    }
  } else {
    for (let i = 0; i < cartItems.length; i++) {
      if (productInfo[clicked] === cartItems[i]) {
        productInfo[clicked].amount++;
      } else {
        cartItems.push(productInfo[clicked]);
        console.log(productInfo[clicked]);
      }
    }
  }

  console.log(cartItems);
}
