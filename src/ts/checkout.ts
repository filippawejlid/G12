import { checkoutCart } from "./checkoutCart";
import { form } from "./checkoutForm";
import { Vacuum } from "./models/Vacuum";



window.onload = function () {
  
  // localStorage.clear();
  checkoutCart();
  form();
}
