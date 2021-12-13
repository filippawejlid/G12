import { Vacuum } from "./models/Vacuum";
import { productInfo } from "./Products";
// import { minusItem } from "./minusitem";

<<<<<<< HEAD
localStorage.clear();
export let cartItems: Vacuum[] =
	JSON.parse(localStorage.getItem("cartItems")) || [];

export function addToCart(clicked: number) {
	let productContainer = document.getElementById("objectContainer" + clicked);

	if (cartItems.length == 0) {
		productInfo[clicked].identification = "objectContainer" + clicked;
		productInfo[clicked].beenAdded = true;
		cartItems.push(productInfo[clicked]);

		console.log(
			"La till " +
				productInfo[clicked].productName +
				productInfo[clicked].beenAdded
		);
	} else if (productInfo[clicked].beenAdded == true) {
		for (let i = 0; i < cartItems.length; i++) {
			if (productContainer.id === cartItems[i].identification) {
				cartItems[i].amount++;

				console.log("Plussa amount " + cartItems[i].amount);
				break;
			}
		}
	} else if (productInfo[clicked].beenAdded == false) {
		productInfo[clicked].identification = "objectContainer" + clicked;
		cartItems.push(productInfo[clicked]);
		productInfo[clicked].beenAdded = true;
	}

	for (let i = 0; i < cartItems.length; i++) {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}
=======
export let cartItems: Vacuum[] =
  JSON.parse(localStorage.getItem("cartItems")) || [];

export function addToCart(clicked: number) {
  localStorage.clear();
  let productContainer = document.getElementById("objectContainer" + clicked);

  if (cartItems.length == 0) {
    productInfo[clicked].identification = "objectContainer" + clicked;
    productInfo[clicked].beenAdded = true;
    cartItems.push(productInfo[clicked]);

    console.log(
      "La till " +
        productInfo[clicked].productName +
        productInfo[clicked].beenAdded
    );
  } else if (productInfo[clicked].beenAdded == true) {
    for (let i = 0; i < cartItems.length; i++) {
      if (productContainer.id === cartItems[i].identification) {
        cartItems[i].amount++;

        console.log("Plussa amount " + cartItems[i].amount);
        break;
      }
    }
  } else if (productInfo[clicked].beenAdded == false) {
    productInfo[clicked].identification = "objectContainer" + clicked;
    cartItems.push(productInfo[clicked]);
    productInfo[clicked].beenAdded = true;
  }

  for (let i = 0; i < cartItems.length; i++) {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
>>>>>>> feature-branch/+-product2
}
