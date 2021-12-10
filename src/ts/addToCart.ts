import { Vacuum } from "./models/Vacuum";
import { productInfo } from "./Products";

export let cartItems: Vacuum[] = [];

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

    console.log(
      "La till ny " +
        productInfo[clicked].productName +
        productInfo[clicked].beenAdded
    );
    console.log(cartItems.length);
  }

  for (let i = 0; i < cartItems.length; i++) {
    console.log(
      "Alla Objekt: " + cartItems[i].productName + " " + cartItems[i].amount
    );
  }
}
