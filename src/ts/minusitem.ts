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



// if (cartItems[clicked].amount == 0) 
//     så ska cartItems[clicked].beenAdded = false
//     och productinfo[rätt objekt].beenAdded = false hmmmm??

//Måste hämta span som antalet varor summan ligger i och ändra inner html till nya amountet
