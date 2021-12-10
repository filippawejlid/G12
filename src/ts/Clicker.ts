import { checkoutCart } from "./checkoutCart";
import { displayCart } from "./displayCart";

export function clicker() {
<<<<<<< HEAD
  var modal: HTMLDivElement = document.getElementById(
    "myModal"
  ) as HTMLDivElement;

  // Get the button that opens the modal
  var btn: HTMLButtonElement = document.getElementById(
    "btnCart"
  ) as HTMLButtonElement;

  // Get the <span> element that closes the modal
  var span: HTMLSpanElement = document.getElementsByClassName(
    "close"
  )[0] as HTMLSpanElement;

  // When the user clicks on the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //Filippa här, måste lägga eventlistener ta inte bort
  btn.addEventListener("click", displayCart);

  // let goToCheckout: HTMLButtonElement = document.getElementById("btnKassa") as HTMLButtonElement;
  // goToCheckout.addEventListener("click", displayCart)
=======
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

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event: Event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	};

	function openModal() {
		modal.style.display = "block";
		displayCart();
	}
	function closeModal() {
		modal.style.display = "none";
	}
>>>>>>> 2a19d2389765ffbb961a2ddf32b4cfcf8fac2836
}
