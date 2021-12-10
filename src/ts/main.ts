import { productinfo } from "./Productinfo";
//import { close } from "./Productinfo";
import { products } from "./Products";
import { clicker } from "./Clicker";
import { form } from "./Form";
import { checkoutCart } from "./checkoutCart";
import "../checkout.html";
// import { minusItem } from "./minusitem";
import { addToCart } from "./addToCart";

import { Vacuum } from "./models/Vacuum";
import {
	w1,
	w2,
	w3,
	w4,
	p1,
	p2,
	p3,
	p4,
	r1,
	r2,
	r3,
	r4,
} from "./models/Vacuumobjects";

window.onload = function () {
	// cartClick();
	clicker();
	form();
	products();

	let checkout: HTMLButtonElement = document.getElementById(
		"btnKassa"
	) as HTMLButtonElement;
	checkout.addEventListener("click", checkoutCart);

	// let page = window.open('checkout.html');
	// page.addEventListener("load", checkoutCart)

	// minusItem();
};

window.onclick = function () {
	// productinfo();
	close();
};
