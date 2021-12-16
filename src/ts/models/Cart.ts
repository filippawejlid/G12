import { productInfo } from "../Products";
import { Order } from "./Order";
import { Vacuum } from "./Vacuum";
import { itemCount } from "../itemcounter";

export class Cart {
	cartItems: Order[];

	constructor() {
		this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
	}

	addToCart(product: Vacuum) {
		this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
		let found: boolean = false;

		for (let i = 0; i < this.cartItems.length; i++) {
			if (this.cartItems[i].Vacuum.id == product.id) {
				this.cartItems[i].Amount++;

				found = true;
			}
		}

		if (!found) {
			let newItem: Order = new Order(product, 1);

			this.cartItems.push(newItem);
		}

		localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
	}

	displayCart() {
		this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

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

		for (let i = 0; i < this.cartItems.length; i++) {
			//Skapa alla element som produktens info ska ligga i

			let productContainer: HTMLDivElement = document.createElement("div");
			productContainer.className = "productContainer";

			let imgContainer: HTMLDivElement = document.createElement("div");
			imgContainer.className = "imgContainer";

			let info: HTMLDivElement = document.createElement("div");
			info.className = "info";

			let adjustments: HTMLDivElement = document.createElement("div");
			adjustments.className = "adjustments";
			adjustments.id = "adjustmentsId";

			let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
			trashCan.id = "trasher";
			trashCan.className = "fa fa-trash";
			trashCan.ariaHidden = "true";

			let trashBtn: HTMLButtonElement = document.createElement("button");
			trashBtn.id = "trashBtn";
			trashBtn.className = "trashBtn";
			trashBtn.type = "button";
			trashBtn.innerHTML = "<i class ='fa fa-trash'></i>";

			trashBtn.addEventListener("click", () => {
				this.removeFromCart(i);
			});

			// PLUS FÖR ATT LÄGGA TILL FLER PRODUKTER
			// PLUS FÖR ATT LÄGGA TILL FLER PRODUKTER

			let plusBtn: HTMLButtonElement = document.createElement(
				"button"
			) as HTMLButtonElement;
			plusBtn.id = "plusBtn";
			plusBtn.className = "plusBtn";
			plusBtn.innerHTML = "<i class='far fa-plus-square'></i>";
			plusBtn.type = "button";
			plusBtn.addEventListener("click", () => {
				console.log("clickety clack");
			});

			//PLUS FÖR ATT LÄGGA TILL FLER PRODUKTER
			//PLUS FÖR ATT LÄGGA TILL FLER PRODUKTER

			let plmiCnt: HTMLDivElement = document.createElement(
				"div"
			) as HTMLDivElement;
			plmiCnt.id = "plmiCnt";
			plmiCnt.className = "theClass";

			let spanpm = document.createElement("span");
			spanpm.className = "spanpm";
			spanpm.id = "quantity" + i;

			// MINUS FÖR ATT TA BORT PRODUKTER
			// MINUS FÖR ATT TA BORT PRODUKTER

			let minusBtn: HTMLButtonElement = document.createElement(
				"button"
			) as HTMLButtonElement;
			minusBtn.id = "minusBtn";
			minusBtn.className = "minusBtn";
			minusBtn.innerHTML = "<i class='far fa-minus-square'></i>";
			minusBtn.type = "button";
			minusBtn.addEventListener("click", () => {
				console.log("clickety clack");
			});

			// MINUS FÖR ATT TA BORT PRODUKTER
			// MINUS FÖR ATT TA BORT PRODUKTER

			let productName: HTMLHeadingElement = document.createElement("h3");

			let amountDiv: HTMLDivElement = document.createElement("div");
			amountDiv.className = "class";

			let amountspan: HTMLSpanElement = document.createElement("span");
			amountspan.id = "amount" + i;

			let priceDiv: HTMLDivElement = document.createElement("div");
			priceDiv.id = "price" + i;
			priceDiv.className = "price";

			let priceSpan: HTMLSpanElement = document.createElement("span");

			// checkout.appendChild(productContainer);
			modal.appendChild(productContainer);
			productContainer.appendChild(imgContainer);
			productContainer.appendChild(info);
			productContainer.appendChild(adjustments);

			// adjustments.appendChild(trashCan);
			adjustments.appendChild(plusBtn);
			adjustments.appendChild(plmiCnt);
			plmiCnt.appendChild(spanpm);
			adjustments.appendChild(minusBtn);
			adjustments.appendChild(trashBtn);

			info.appendChild(productName);
			info.appendChild(amountDiv);
			info.appendChild(priceDiv);

			amountDiv.appendChild(amountspan);

			priceDiv.appendChild(priceSpan);

			spanpm.innerHTML = `${this.cartItems[i].Amount.toString()}`;

			imgContainer.innerHTML = this.cartItems[i].Vacuum.imgsmall;
			productName.innerHTML = this.cartItems[i].Vacuum.productName;
			amountspan.innerHTML = `Antal: ${this.cartItems[i].Amount.toString()}`;
			priceSpan.innerHTML = `${this.cartItems[i].Vacuum.price.toString()} kr`;

			sumList.push(this.cartItems[i].Vacuum.price * this.cartItems[i].Amount);
		}

		//Räkna ut total

		let sum = sumList.reduce(function (a, b) {
			return a + b;
		}, 0);

		total.innerHTML = `${sum.toString()} kr`;

		//console.log(sum);
	}

	checkoutCart() {
		// this.cartItems =
		// JSON.parse(localStorage.getItem("cartItems")) || [];

		let total: HTMLSpanElement = document.getElementById(
			"totalSpanCheckout"
		) as HTMLSpanElement;
		total.className = "totalSpans";
		total.innerHTML = " ";
		let sumList: number[] = [];
		let checkout: HTMLDivElement = document.getElementById(
			"checkoutCart"
		) as HTMLDivElement;
		checkout.innerHTML = " ";

		for (let i = 0; i < this.cartItems.length; i++) {
			//Skapa alla element som produktens info ska ligga i

			let productContainer: HTMLDivElement = document.createElement("div");
			productContainer.className = "productContainer";

			let imgContainer: HTMLDivElement = document.createElement("div");
			imgContainer.className = "imgContainer";

			let info: HTMLDivElement = document.createElement("div");
			info.className = "info";

			let adjustments: HTMLDivElement = document.createElement("div");
			adjustments.className = "adjustments";
			let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
			trashCan.id = "trasher";
			trashCan.className = "fa fa-trash";
			trashCan.ariaHidden = "true";

			let productName: HTMLHeadingElement = document.createElement("h3");

			let amountDiv: HTMLDivElement = document.createElement("div");
			amountDiv.className = "class";
			let amountspan: HTMLSpanElement = document.createElement("span");
			amountspan.id = "amount" + i;

			let priceDiv: HTMLDivElement = document.createElement("div");
			priceDiv.id = "price" + i;
			priceDiv.className = "price";
			let priceSpan: HTMLSpanElement = document.createElement("span");

			checkout.appendChild(productContainer);
			productContainer.appendChild(imgContainer);
			productContainer.appendChild(info);
			productContainer.appendChild(adjustments);

			adjustments.appendChild(trashCan);

			info.appendChild(productName);
			info.appendChild(amountDiv);
			info.appendChild(priceDiv);

			amountDiv.appendChild(amountspan);

			priceDiv.appendChild(priceSpan);

			imgContainer.innerHTML = this.cartItems[i].Vacuum.imgsmall;
			productName.innerHTML = this.cartItems[i].Vacuum.productName;
			amountspan.innerHTML = `Antal: ${this.cartItems[i].Amount.toString()}`;
			priceSpan.innerHTML = `${this.cartItems[i].Vacuum.price.toString()} kr`;

			sumList.push(this.cartItems[i].Vacuum.price * this.cartItems[i].Amount);
		}

		//Räkna ut total

		let sum = sumList.reduce(function (a, b) {
			return a + b;
		}, 0);

		total.innerHTML = `${sum.toString()} kr`;

		// console.log(sum);
	}

	removeFromCart(i: number) {
		this.cartItems.splice(i, 1);
		localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

		console.log("Du har tagit bort en produkt");

		this.displayCart();
		itemCount();
	}
}
export let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
