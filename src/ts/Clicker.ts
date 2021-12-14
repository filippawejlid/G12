// import { cartItems } from "./addToCart";
// import { displayCart } from "./displayCart";

import { Cart } from "./models/Cart";

export function clicker() {
  let cart = new Cart();

  let modal: HTMLDivElement = document.getElementById(
    "myModal"
  ) as HTMLDivElement;

  let btn: HTMLButtonElement = document.getElementById(
    "btnCart"
  ) as HTMLButtonElement;

  let span: HTMLSpanElement = document.getElementsByClassName(
    "close"
  )[0] as HTMLSpanElement;

  let continueShopping: HTMLButtonElement = document.getElementById(
    "btnHandla"
  ) as HTMLButtonElement;

  // When the user clicks on the button, open the modal
  btn.addEventListener("click", openModal);

  // When the user clicks on the buttons, close the modal
  span.addEventListener("click", closeModal);

  continueShopping.addEventListener("click", closeModal);

  //   goToCart.addEventListener("click", ()=> {
  //   });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event: Event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function openModal() {
    modal.style.display = "block";
    cart.displayCart();
	// localStorage.setItem("cartItems", JSON.stringify(cartItems));

  }
  function closeModal() {
    modal.style.display = "none";
  }
}
