import { Vacuum } from "./models/Vacuum";
import { productInfo } from "./Products";
import { cartItems } from "./addToCart";
import { displayCart } from "./displayCart";
export function minusItem() {
  let trashBtn = document.getElementById("trasher");
  if (trashBtn.click) {
    console.log("du klickade");
  }
}

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
