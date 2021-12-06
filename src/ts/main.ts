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
// <div id="wirelesscontainer">
//  <div class="productcontainer">
//               <div class="imgcontainer">
//                   <img />
//               </div>
//               <div class="productInfoContainer">
//                 <h2 class="vacuumheader"></h2>
//                 <div class="vacuuminfo">
//                   <span></span>

//                 </div>
//                  <h2 class="price"></h2>
//                 <div class="productbtns">
//                   <button class="readmore" id="dysoncyclonev10btn" data.value="dysoncyclonev10btn" >Läs mer <i class="fas fa-info-circle"></i></button>
//                   <button class="addtocart">Lägg till i varukorg <i class="fas fa-cart-plus"></i></button>
//                 </div>
//               </div>
//   </div>
// </div>

let productInfo: Vacuum[] = [w1, w2, w3, w4, p1, p2, p3, p4, r1, r2, r3, r4];
window.onload = function () {
  // FUNCTION FOR ALL THE PRODUCTS ON THE FRONT PAGE
  products();

  // cartClick();
  clicker();
};

function products() {
  for (let i = 0; i < productInfo.length; i++) {
    let wirelessContainer: HTMLDivElement = document.getElementById(
      "wirelesscontainer"
    ) as HTMLDivElement;

    // productcontainer div som ska ligga innanför wirelesscontainer
    let productContainer = document.createElement("div");
    productContainer.className = "productcontainer";

    // imgcontainer div som ska ligga innanför productContainer
    let imgContainer = document.createElement("div");
    imgContainer.className = "imgcontainer";
    imgContainer.innerHTML = productInfo[i].imgsmall;

    // div som ska ha vacuumheader, vacuuminfo, productbtns
    let productInfoContainer = document.createElement("div");
    productInfoContainer.className = "productInfoContainer";

    // html för vacuumheader, vacuuminfo, price, productbtns
    let vacuumHeader = document.createElement("h2");
    vacuumHeader.className = "vacuumheader";
    vacuumHeader.innerHTML = productInfo[i].discriptionlandpageh2;

    let vacuumInfo = document.createElement("div");
    vacuumInfo.className = "vacuuminfo";
    vacuumInfo.innerHTML = productInfo[i].discriptionlandpagespan;

    let price = document.createElement("h2");
    price.className = "price";
    price.innerHTML = `${productInfo[i].price.toString()} kr`;

    let productBtns = document.createElement("div");
    productBtns.className = "productbtns";

    let readMoreBtn = document.createElement("button");
    readMoreBtn.className = "readmore";
    readMoreBtn.innerHTML = productInfo[i].readmorebtn;

    let addToCartBtn = document.createElement("button");
    addToCartBtn.className = "addtocart";
    addToCartBtn.innerHTML = productInfo[i].addtocartbtn;

    //<span></span> innanför vacuuminfo
    let vacuumInfoSpan = document.createElement("span");

    // appendChild
    wirelessContainer.appendChild(productContainer);
    productContainer.appendChild(imgContainer);
    productContainer.appendChild(productInfoContainer);
    productInfoContainer.appendChild(vacuumHeader);
    productInfoContainer.appendChild(vacuumInfo);
    productInfoContainer.appendChild(price);
    productInfoContainer.appendChild(productBtns);
    productBtns.appendChild(readMoreBtn);
    productBtns.appendChild(addToCartBtn);
    vacuumInfo.appendChild(vacuumInfoSpan);
  }
}

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
