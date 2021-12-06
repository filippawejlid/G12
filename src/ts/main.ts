import { Vacuum } from "./models/Vacuum";
window.onload = function () {
	// cartClick();
	clicker();
    document.getElementById("myModal").addEventListener("click", displayCart)
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

window.onload = () => {
	let w1 = new Vacuum(
		"Dyson Cyclone V10",
		5190,
		"/assets/Dysoncyclonev10_productpage.png",
		"<img src=/src/assets/Sladdlös-Dyson-Cyclone-V10.png alt='Bild på en dammsugaren' width='200' height='250'/>",
		"<h2>Dyson Cyclone V10</h2> <span> Byggt för djup rengöring, överallt. Upp till 60 minuter körtid.</span>",
		"<h1>Oslagbar prestanda</h1> <div>Dyson Cyclone V10 Absolute kommer med upp till 60 minuters kraftfull bibehållen sugförmåga. Den 40% större behållaren betyder också färre avbrott. </div>",
		"<h1>Avancerad filtrering</h1> <div>Avancerad filtrering säkerställer att dammsugaren släpper ut renare luft och tömningssystemet 'point and shoot' möjliggör en mer hygienisk metod för att tömma behållaren. Inkluderar åtta verktyg och tillbehör för grundlig rengöring var som helst i hemmet.</div>",
		1,
		"wireless"
	);
	let productInfo: Vacuum[] = [w1];

	for (let i = 0; i < productInfo.length; i++) {
		let imgContainer: HTMLDivElement = document.getElementById(
			"imgcontainer"
		) as HTMLDivElement;
		imgContainer.innerHTML = productInfo[i].imgsmall;
	}
};

// let w2 = new Vacuum("Dyson Outsize", 8290);
// let w3 = new Vacuum("Dyson V12 detect slim Complete", 7190);
// let w4 = new Vacuum("Dyson V15 Detect Absolute", 7190);
// let p1 = new Vacuum("Dyson Big Ball Multi Floor", 3190);
// let p2 = new Vacuum("Dyson Cinetic Big Ball Absolute", 4190);
// let p3 = new Vacuum("Dyson Cinetic Big Ball Animal Pro 1", 4190);
// let p4 = new Vacuum("Dyson Cinetic Big Ball Animal Pro 2", 5190, "<h2>");
// let r1 = new Vacuum("Dyson 360 Heurist™ robot 1", 3199);
// let r2 = new Vacuum("Dyson 360 Heurist™ robot 2", 3999);
// let r3 = new Vacuum("Dyson 360 Heurist™ robot 3", 4190);
// let r4 = new Vacuum("Dyson 360 Heurist™ robot 4", 4999);

let cartItems: object[] = [];
function addToCart(clicked) {

    for (let i = 0; i < cartItems.length; i++) {

        if (clicked == cartItems[i]) {

            

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
        // amountspan.innerHTML = 
    }

}
