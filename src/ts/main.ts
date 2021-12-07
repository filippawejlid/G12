import { displayCart } from "./models/displayCart";
import { productinfo } from "./models/Productinfo";
import { products } from "./models/Products";
import { clicker } from "./models/Clicker";
import { form } from "./models/Form";
import { addToCart } from "./models/addToCart";
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
  //addToCart();
  clicker();
  displayCart();
  form();
  productinfo();
  products();

  document.getElementById("btnCart").addEventListener("click", displayCart);
};
