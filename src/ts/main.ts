import { productinfo } from "./models/Productinfo";
import { products } from "./models/Products";

window.onload = function () {
  // cartClick();
  clicker();
  products();
  form();
  productinfo();

  document.getElementById("btnCart").addEventListener("click", displayCart);
};
