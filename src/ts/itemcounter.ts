import { Cart } from "./models/Cart";

export function itemCount() {

	let cart = new Cart();

	let spanCnt = document.getElementById("cCnt");
	spanCnt.innerHTML = " ";
	let addedNo: number[] = [];

	// spanCnt.classList.add("counter-container");

	for (let i = 0; i < cart.cartItems.length; i++) {
		let spanCounter = document.createElement("span");
		spanCounter.id = "counter";
		spanCounter.className = "counter";
		spanCnt.style.color = "white";
		spanCnt.style.backgroundColor = "red";
		addedNo.push(cart.cartItems[i].Amount);
		spanCnt.appendChild(spanCounter);
		spanCounter.innerText = `${cart.cartItems[i].Amount.toString()}`;
	}

	let totAdd = addedNo.reduce(function (a, b) {
		return a + b;
	}, 0);

	spanCnt.innerText = `${totAdd.toString()}`;
}
