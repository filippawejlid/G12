import { Cart, cartItems } from "./models/Cart";
import { Vacuum } from "./models/Vacuum";
import { Order } from "./models/Order";
import { productinfo } from "./Productinfo";

export function plus() {
  let pBTn = document.getElementById("plusBtn");
  // let cartBtn = new Cart();
  console.log(pBTn.click, "Du klickade");

  // pBTn.addEventListener("click", function addQ() {
  // 	let found = false;
  // 	for (let i = 0; cartBtn.Amount; i++) {
  // 		if (cartBtn[i].Amount === ) {
  // 			found = true;
  // 		}
  // 	}
  // 	console.log(found);
  // });
}

// export function quant(product: Vacuum) {
// 	let foundCart = new Cart();
// 	let found: boolean = false;

// 	for (let i = 0; i < this.foundCart.length; i++) {
// 		if (foundCart.cartItems[ı].Vacuum.id == product.id) {
// 			foundCart.cartItems[i].Amount++;

// 			found = true;
// 		}
// 	}

// 	if (!found) {
// 		let newThing: Order = new Order(product, 1);
// 		foundCart.cartItems.push(newThing);
// 	}
// }

export function pmadjust() {
  let cart = new Cart();
  let qDiv = document.getElementById("plmiCnt");
  qDiv.innerHTML = " ";

  let qNo: number[] = [];

  for (let i = 0; i < cart.cartItems.length; i++) {
    let spanPlusMinus = document.createElement("span");
    spanPlusMinus.className = "plusMinusSpan";
    // spanPlusMinus.id = "amount" + i;

    spanPlusMinus.style.fontSize = "large";
    spanPlusMinus.style.fontWeight = "bolder";

    qDiv.appendChild(spanPlusMinus);
    spanPlusMinus.innerHTML = `${cart.cartItems[i].Amount}`;
    qNo.push(cart.cartItems[i].Amount);
  }

  let qAdd = qNo.reduce(function (a, b) {
    return a + b;
  }, 0);

  qDiv.innerHTML == `${qAdd.toString()}`;
}
// export function plus() {
// 	let pBTn = document.getElementById("plusBtn");

// 	pBTn.addEventListener("click", function addq() {
// 		let found = false;
// 		for (let i = 0; cartItems.length; i++) {
// 			if (cartItems[i].amount === 1) {
// 				found = true;
// 			}
// 		}
// 		console.log(found);
// 	});
// }
