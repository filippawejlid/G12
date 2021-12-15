import { Cart, cartItems } from "./models/Cart";

//let spanCnt = document.getElementById("cCnt");

export function itemCount() {
  let cart = new Cart();

  let spanCnt = document.getElementById("cCnt");
  spanCnt.innerHTML = " ";
  let addedNo: number[] = [];

  // spanCnt.classList.add("counter-container");
  // let nothing = document.getElementById("span");

  for (let i = 0; i < cart.cartItems.length; i++) {
    let spanCounter = document.createElement("span");
    spanCounter.id = "counter";
    spanCounter.className = "counter";
    spanCnt.style.color = "white";
    spanCnt.style.backgroundColor = "red";
    addedNo.push(cart.cartItems[i].Amount);
    spanCnt.appendChild(spanCounter);
    spanCounter.innerText = `${cart.cartItems[i].Amount.toString()}`;
    console.log(spanCounter);

    console.log(cart.cartItems[i].Amount);
  }

  let totAdd = addedNo.reduce(function (a, b) {
    return a + b;
  }, 0);

  spanCnt.innerText = `${totAdd.toString()}`;
}

// export function removeSpanCnt() {
//   spanCnt.style.display = "none";
//   console.log("Räknaren är borta");
// }
