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
