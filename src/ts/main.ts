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
    r4 } from "./models/Vacuumobjects";
window.onload = function () {

	// cartClick();
	clicker();
  document.getElementById("btnCart").addEventListener("click", displayCart)

let productInfo: Vacuum[] = [w1, w2, w3, w4, p1, p2, p3, p4, r1, r2, r3, r4];
window.onload = function () {
  // FOR LOOP FOR ALL THE PRODUCTS ON THE FRONT PAGE

  for (let i = 0; i < productInfo.length; i++) {
    let imgContainer: HTMLDivElement = document.getElementById(
      "imgcontainer"
    ) as HTMLDivElement;
    imgContainer.innerHTML = productInfo[i].imgsmall;
  }
  // cartClick();
  clicker();
};

// function cartClick() {
// 	let cartLink: HTMLLinkElement = document.getElementById(
// 		"cartLink"
// 	) as HTMLLinkElement;
// 	cartLink.addEventListener("click", function () {
// 		// document.getElementById("cartDiv").className = "hddnCrt";
// 		// document.getElementById("cartDiv").className += "showDiv";

// 		document.getElementById("cartDiv").className = document
// 			.getElementById("cartDiv")
// 			.className.replace(/(?:^|\s)hddnCrt(?!\S)/g, "showDiv");
// 	});
// }

function clicker() {
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
}


let cartItems: object[] = [w1];
function addToCart(clicked) {

    for (let i = 0; i < cartItems.length; i++) {

        if (productInfo[clicked] == cartItems[i]) {

            // cartItems[i].amount++;
            
        }
        else {
          cartItems.push(productInfo[clicked])
        }
        
    }

}

function displayCart() {

  

    for (let i = 0; i < cartItems.length; i++) {

        let modal:HTMLDivElement = document.getElementById("myModal") as HTMLDivElement;
        
        let productContainer:HTMLDivElement = document.createElement("div");
        modal.appendChild(productContainer);

        let imgContainer:HTMLDivElement = document.createElement("div");
        let img:HTMLImageElement = document.createElement("img");
        productContainer.appendChild(imgContainer);
        imgContainer.appendChild(img);

        let info:HTMLDivElement = document.createElement("div");
        productContainer.appendChild(info);

        let productName:HTMLHeadingElement = document.createElement("h3");
        info.appendChild(productName);

        let amountDiv:HTMLDivElement = document.createElement("div");
        info.appendChild(amountDiv);
        let span:HTMLSpanElement = document.createElement("span");
        amountDiv.appendChild(span);
        let amountspan:HTMLSpanElement = document.createElement("span");
        amountDiv.appendChild(amountspan);

        let priceDiv:HTMLDivElement = document.createElement("div");
        info.appendChild(priceDiv);
        let span2:HTMLSpanElement = document.createElement("span");
        priceDiv.appendChild(span2);
        let priceSpan:HTMLSpanElement = document.createElement("span");
        priceDiv.appendChild(priceSpan);


        // img.src = cartItems[i].imgsmall;
        // productName.innerHTML = cartItems[i].name;
        // amountspan.innerHTML = cartItems[i].amount++;
        // priceSpan.innerHTML = cartItems[i].price;

    }

}
}
