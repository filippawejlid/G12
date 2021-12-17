import { Cart } from "./models/Cart";

window.onload = function () {
	let cart = new Cart();
	cart.thankyouCart();
	toggleMobileMenu();
};

function toggleMobileMenu() {
	let hamburger = document.getElementById("hamburger-icon");
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("open");
	});
}
