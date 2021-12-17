import { Cart } from "../models/Cart";

export function clicker() {
	let cart = new Cart();

	let modal: HTMLDivElement = document.getElementById(
		"myModal"
	) as HTMLDivElement;

	let btn: HTMLButtonElement = document.getElementById(
		"btnCart"
	) as HTMLButtonElement;

	let btnTwo: HTMLButtonElement = document.getElementById(
		"btnCart2"
	) as HTMLButtonElement;

	let span: HTMLSpanElement = document.getElementsByClassName(
		"close"
	)[0] as HTMLSpanElement;

	let continueShopping: HTMLButtonElement = document.getElementById(
		"btnHandla"
	) as HTMLButtonElement;

	btn.addEventListener("click", openModal);

	btnTwo.addEventListener("click", openModal);

	span.addEventListener("click", closeModal);

	continueShopping.addEventListener("click", closeModal);

	window.onclick = function (event: Event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};

	function openModal() {
		modal.style.display = "block";
		cart.displayCart();
	}
	function closeModal() {
		modal.style.display = "none";
	}
}
