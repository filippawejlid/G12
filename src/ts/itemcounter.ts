import { cartItems } from "./addToCart";

export function itemCount() {
	let spanCnt = document.getElementById("cCnt");
	spanCnt.innerHTML = " ";
	let addedNo: number[] = [];

	// spanCnt.classList.add("counter-container");
	// let nothing = document.getElementById("span");

	for (let i = 0; i < cartItems.length; i++) {
		let spanCounter = document.createElement("span");
		spanCounter.id = "counter";
		spanCounter.className = "counter";
		spanCnt.style.color = "white";
		spanCnt.style.backgroundColor = "red";
		addedNo.push(cartItems[i].amount);
		spanCnt.appendChild(spanCounter);
		spanCounter.innerText = `${cartItems[i].amount.toString()}`;
	}

	let totAdd = addedNo.reduce(function (a, b) {
		return a + b;
	}, 0);

	spanCnt.innerText = `${totAdd.toString()}`;
}
