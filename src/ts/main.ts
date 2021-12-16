
import { products } from "./functions/Products";
import { clicker } from "./functions/Clicker";

localStorage.clear();


window.onload = function () {
	clicker();
	products();

};


