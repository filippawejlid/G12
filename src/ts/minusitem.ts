import { Vacuum } from "./models/Vacuum";
import { productInfo } from "./Products";
import { addToCart, cartItems } from "./addToCart";
import { displayCart } from "./displayCart";

export function minusItem() {
  let trashBtn = document.getElementById("trasher");
  if (trashBtn.click) {
    console.log("du klickade");
  }
}

// else if (productInfo[clicked].beenAdded == true) {
// 	for (let i = 0; i < cartItems.length; i++) {
// 		if (productContainer.id === cartItems[i].identification) {
// 			cartItems[i].amount++;

// 			console.log("Plussa amount " + cartItems[i].amount);
// 			break;
// 		}
// 	}
// }
