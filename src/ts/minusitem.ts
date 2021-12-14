import { Vacuum } from "./models/Vacuum";
import { productInfo } from "./Products";
import { displayCart } from "./displayCart";
import { Cart, cartItems } from "./models/Cart";
import { Order } from "./models/Order";
export function minusItem(i: number) {
  let cart = new Cart();
}

// let trashBtn: HTMLDivElement = document.getElementById(
//   "trasher"
// ) as HTMLDivElement;
// trashBtn.addEventListener("click", (e) => {
//   remove(e, i);
// });

// function remove(e: Event, i: number) {
//   cartItems.splice(i, 1);
//   console.log("Du har klickat");
//   displayCart();
// }

// let productContainer = document.getElementById("productContainer");
// export function addmore() {
//   for (let i = 0; i < cartItems.length; i++) {
//     if (cartItems[i].identification != null) {
//       cartItems[i].amount++;
//     } else if (cartItems[i].identification == null) {
//       console.log("Finns inget att lägga till");
//     }
//   }
//   console.log("Lägg till en till");
// }

// if (cartItems[clicked].amount == 0)
//     så ska cartItems[clicked].beenAdded = false
//     och productinfo[rätt objekt].beenAdded = false hmmmm??

//Måste hämta span som antalet varor summan ligger i och ändra inner html till nya amountet;
