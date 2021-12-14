import { Cart } from "./models/Cart";
import { Vacuum } from "./models/Vacuum";
import { Order } from "./models/Order";

export function plus() {
	let pBTn = document.getElementById("plusBtn");
	// let cartBtn = new Cart();
	console.log(pBTn.click, "Du klickade");

	// pBTn.addEventListener("click", function addQ() {
	// 	let found = false;
	// 	for (let i = 0; cartBtn.Amount; i++) {
	// 		if (cartBtn[i].Amount === ) {
	// 			found = true;
	// 		}
	// 	}
	// 	console.log(found);
	// });
}

export function pmadjust() {
	let cart = new Cart();
	let qDiv = document.getElementById("plmiCnt");
	qDiv.innerHTML = " ";

	let qNo: number[] = [];

	for (let i = 0; i < cart.cartItems.length; i++) {
		let spanPlusMinus = document.createElement("span");
		spanPlusMinus.id = "plusMinusSpan";
		spanPlusMinus.className = "plusMinusSpan";
		spanPlusMinus.style.fontSize = "large";
		spanPlusMinus.style.fontWeight = "bolder";
		qNo.push(cart.cartItems[i].Amount);
		qDiv.appendChild(spanPlusMinus);
		spanPlusMinus.innerHTML = `${cart.cartItems[i].Amount.toString()}`;
	}

	let qAdd = qNo.reduce(function (a, b) {
		return a + b;
	}, 0);

	qDiv.innerHTML = `${qAdd.toString()}`;
}
