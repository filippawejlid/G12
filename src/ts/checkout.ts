import { form } from "./functions/checkoutForm";
import { Cart } from "./models/Cart";



window.onload = function () {

  let cart = new Cart;
  cart.checkoutCart();
  form();
}
