import { displayCart } from "./displayCart";
import { cartItems } from "./addToCart";

export function pmadjust() {
	// let mBtn = document.getElementById("minusBtn");

	let qDiv = document.getElementById("plmiCnt");
	qDiv.innerHTML = " ";

	let qNo: number[] = [];

	for (let i = 0; i < cartItems.length; i++) {
		let spanPlusMinus = document.createElement("span");
		spanPlusMinus.id = "plusMinusSpan";
		spanPlusMinus.className = "plusMinusSpan";
		spanPlusMinus.style.fontSize = "large";
		spanPlusMinus.style.fontWeight = "bolder";
		qNo.push(cartItems[i].amount);
		qDiv.appendChild(spanPlusMinus);
		spanPlusMinus.innerText = `${cartItems[i].amount.toString()}`;
	}

	let qAdd = qNo.reduce(function (a, b) {
		return a + b;
	}, 0);

	qDiv.innerText = `${qAdd.toString()}`;
}

export function plus() {
	let pBTn = document.getElementById("plusBtn");

	pBTn.addEventListener("click", function addq() {
		let found = false;
		for (let i = 0; cartItems.length; i++) {
			if (cartItems[i].amount === 1) {
				found = true;
			}
		}
		console.log(found);
	});
}
