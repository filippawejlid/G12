import { cartItems } from "./addToCart";
import { checkoutCart } from "./checkoutCart";
import { minusItem } from "./minusitem";

export function displayCart() {
	let total: HTMLSpanElement = document.getElementById(
		"totalSpan"
	) as HTMLSpanElement;
	total.innerHTML = " ";
	let modal: HTMLDivElement = document.getElementById(
		"displayCartModal"
	) as HTMLDivElement;
	modal.innerHTML = " ";
	let sumList: number[] = [];

	for (let i = 0; i < cartItems.length; i++) {
		//Skapa alla element som produktens info ska ligga i

		let productContainer: HTMLDivElement = document.createElement("div");
		productContainer.className = "productContainer";

		let imgContainer: HTMLDivElement = document.createElement("div");
		imgContainer.className = "imgContainer";
		let img: HTMLImageElement = document.createElement("img");

		let info: HTMLDivElement = document.createElement("div");
		info.className = "info";

		let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
		trashCan.id = "trasher";
		trashCan.className = "fa fa-trash";
		trashCan.ariaHidden = "true";

		trashCan.addEventListener("click", () => {
			minusItem();
		});

		let productName: HTMLHeadingElement = document.createElement("h3");

		let amountDiv: HTMLDivElement = document.createElement("div");
		amountDiv.className = "class";
		let amountspan: HTMLSpanElement = document.createElement("span");
		amountspan.id = "amount" + i;

		let priceDiv: HTMLDivElement = document.createElement("div");
		priceDiv.id = "price" + i;
		priceDiv.className = "price";
		let priceSpan: HTMLSpanElement = document.createElement("span");

		modal.appendChild(productContainer);
		productContainer.appendChild(imgContainer);
		productContainer.appendChild(info);
		productContainer.appendChild(trashCan);

		imgContainer.appendChild(img);

		info.appendChild(productName);
		info.appendChild(amountDiv);
		info.appendChild(priceDiv);

		amountDiv.appendChild(amountspan);

		priceDiv.appendChild(priceSpan);

		img.src = cartItems[i].imgsmall;
		productName.innerHTML = cartItems[i].productName;
		amountspan.innerHTML = `Antal: ${cartItems[i].amount.toString()}`;
		priceSpan.innerHTML = `${cartItems[i].price.toString()} kr`;

		sumList.push(cartItems[i].price * cartItems[i].amount);

		let spanCnt = document.getElementById("cCnt");

		let spanCounter = document.createElement("span");
		spanCounter.id = "counter";
		sumList.push(cartItems[i].amount);
		spanCnt.appendChild(spanCounter);
		spanCounter.innerHTML = `${cartItems[i].price.toString()}`;
	}

	//Räkna ut total

	let sum = sumList.reduce(function (a, b) {
		return a + b;
	}, 0);

	total.innerHTML = `${sum.toString()} kr`;

	// console.log(sum);
}
