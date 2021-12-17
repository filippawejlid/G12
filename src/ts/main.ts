import { products, showImages } from "./functions/Products";
import { clicker } from "./functions/Clicker";

localStorage.clear();

window.onload = function () {
	clicker();
	products();
	showImages();
	toggleMobileMenu();
};

function toggleMobileMenu() {
	let hamburger = document.getElementById("hamburger-icon");
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("open");
	});
}
