// import { cartItems } from "./addToCart";
//import { minusItem } from "./minusitem";
//import { addmore } from "./minusitem";
import { pmadjust } from "./pmadjust";
// import { plus } from "./pmadjust";

export function displayCart() {
	pmadjust();
	let total: HTMLSpanElement = document.getElementById(
		"totalSpan"
	) as HTMLSpanElement;
	total.className = "totalSpans";
	total.innerHTML = " ";
	let modal: HTMLDivElement = document.getElementById(
		"displayCartModal"
	) as HTMLDivElement;
	modal.innerHTML = " ";
	let sumList: number[] = [];

	// for (let i = 0; i < cartItems.length; i++) {
	// 	//Skapa alla element som produktens info ska ligga i

	// 	let productContainer: HTMLDivElement = document.createElement("div");
	// 	productContainer.className = "productContainer";
	// 	productContainer.id = "productContainer";

	// 	let imgContainer: HTMLDivElement = document.createElement("div");
	// 	imgContainer.className = "imgContainer";

	// 	let info: HTMLDivElement = document.createElement("div");
	// 	info.className = "info";

	// 	let adjustments: HTMLDivElement = document.createElement("div");
	// 	adjustments.className = "adjustments";
	// 	adjustments.id = "adjustmentsId";

	// 	let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
	// 	trashCan.id = "trasher";
	// 	trashCan.className = "fa fa-trash";
	// 	trashCan.ariaHidden = "true";

	// 	let trashBtn: HTMLButtonElement = document.createElement("button");
	// 	trashBtn.id = "trashBtn";
	// 	trashBtn.className = "trashBtn";
	// 	trashBtn.type = "button";
	// 	trashBtn.innerHTML = "<i class ='fa fa-trash'></i>";

	// 	// trashCan.addEventListener("click", () => {
	// 	//   minusItem();
	// 	// });

	// 	// PLUS FÖR ATT LÄGGA TILL FLER PRODUKTER
	// 	let plusBtn: HTMLButtonElement = document.createElement(
	// 		"button"
	// 	) as HTMLButtonElement;
	// 	plusBtn.id = "plusBtn";
	// 	plusBtn.className = "plusBtn";
	// 	plusBtn.innerHTML = "<i class='far fa-plus-square'></i>";
	// 	// plusBtn.type = "button";
	// 	plusBtn.addEventListener("click", () => {
	// 		// LA TILL FUNKTION FÖR PLUSKNAPPEN
	// 		plus();
	// 	});

	// 	let plusFa = document.createElement("i");
	// 	plusFa.className = "plus fa-plus-square";
	// 	// plus.innerHTML = "<i class='far fa-plus-square'></i>";
	// 	// plus.addEventListener("click", () => {
	// 	//   addmore();
	// 	// });

	// 	// spanPlusMinus.innerText = "100";

	// 	let plmiCnt: HTMLDivElement = document.createElement(
	// 		"div"
	// 	) as HTMLDivElement;
	// 	plmiCnt.id = "plmiCnt";
	// 	plmiCnt.className = "plmiCnt";

	// 	// let inputPlusMinus: HTMLInputElement = document.createElement("input");
	// 	// inputPlusMinus.id = "inpPlmi";
	// 	// inputPlusMinus.className = "inpPlmi";
	// 	// inputPlusMinus.innerHTML = "";
	// 	// inputPlusMinus.style.userSelect = "none";

	// 	let minusBtn: HTMLButtonElement = document.createElement(
	// 		"button"
	// 	) as HTMLButtonElement;
	// 	minusBtn.id = "minusBtn";
	// 	minusBtn.className = "minusBtn";
	// 	minusBtn.innerHTML = "<i class='far fa-minus-square'></i>";
	// 	minusBtn.type = "button";

	// 	let minusFa = document.createElement("i");
	// 	minusFa.className = "minus fa-minus-square";
	// 	// minus.innerHTML = "<i class='far fa-minus-square'></i>";

	// 	let productName: HTMLHeadingElement = document.createElement("h3");

	// 	let amountDiv: HTMLDivElement = document.createElement("div");
	// 	amountDiv.className = "class";
	// 	let amountspan: HTMLSpanElement = document.createElement("span");
	// 	amountspan.id = "amount" + i;

	// 	let priceDiv: HTMLDivElement = document.createElement("div");
	// 	priceDiv.id = "price" + i;
	// 	priceDiv.className = "price";
	// 	let priceSpan: HTMLSpanElement = document.createElement("span");

	// 	// APPENDCHILD
	// 	modal.appendChild(productContainer);
	// 	productContainer.appendChild(imgContainer);
	// 	productContainer.appendChild(info);
	// 	productContainer.appendChild(adjustments);

	// 	adjustments.appendChild(plusBtn);
	// 	adjustments.appendChild(plmiCnt);
	// 	adjustments.appendChild(minusBtn);
	// 	adjustments.appendChild(trashBtn);

	// 	info.appendChild(productName);
	// 	info.appendChild(amountDiv);
	// 	info.appendChild(priceDiv);

	// 	amountDiv.appendChild(amountspan);

	// 	priceDiv.appendChild(priceSpan);

	// 	// imgContainer.innerHTML = cartItems[i].imgsmall;
	// 	// productName.innerHTML = cartItems[i].productName;
	// 	// amountspan.innerHTML = `Antal: ${cartItems[i].amount.toString()}`;
	// 	// priceSpan.innerHTML = `${cartItems[i].price.toString()} kr`;

	// 	// sumList.push(cartItems[i].price * cartItems[i].amount);
	// }

	// Räkna ut total

	let sum = sumList.reduce(function (a, b) {
		return a + b;
	}, 0);

	total.innerHTML = `${sum.toString()} kr`;
	console.log(sum);
	// console.log(sum);
	// 	pmadjust();
}
