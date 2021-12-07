// import { Vacuum } from "./models/Vacuum";
// import { 
//     w1,
//     w2,
//     w3,
//     w4,
//     p1,
//     p2,
//     p3,
//     p4,
//     r1,
//     r2,
//     r3,
//     r4 } from "./models/Vacuumobjects";
window.onload = function() {
    // cartClick();
    clicker();
    document.getElementById("btnCart").addEventListener("click", displayCart);
    // let productInfo: Vacuum[] = [w1, w2, w3, w4, p1, p2, p3, p4, r1, r2, r3, r4];
    window.onload = function() {
        // FOR LOOP FOR ALL THE PRODUCTS ON THE FRONT PAGE
        for(let i = 0; i < productInfo.length; i++){
            let imgContainer = document.getElementById("imgcontainer");
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
        var modal = document.getElementById("myModal");
        // Get the button that opens the modal
        var btn = document.getElementById("btnCart");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on the button, open the modal
        btn.onclick = function() {
            modal.style.display = "block";
        };
        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function() {
            modal.style.display = "none";
        });
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) modal.style.display = "none";
        };
    }
    class Vacuum {
        constructor(name, price, imghero, imgsmall, discriptionlandpage, discriptioninfopage1, discriptioninfopage2, id, category){
            this.productName = name;
            this.price = price;
            this.imghero = imghero;
            this.imgsmall = imgsmall;
            this.discriptionlandpage = discriptionlandpage;
            this.discriptioninfopage1 = discriptioninfopage1;
            this.discriptioninfopage2 = discriptioninfopage2;
            this.id = id;
            this.category = category;
        }
    }
    let w1 = new Vacuum("Dyson Cyclone V10", 5190, "<img src=/src/assets/Dysoncyclonev10_productpage.png alt='Bild på en dammsugaren'/>", "<img src=/src/assets/Sladdlös-Dyson-Cyclone-V10.png alt='Bild på en dammsugaren' width='200' height='250'/>", "<h2>Dyson Cyclone V10</h2> <span> Byggt för djup rengöring, överallt. Upp till 60 minuter körtid.</span>", "<h1>Oslagbar prestanda</h1> <div>Dyson Cyclone V10 Absolute kommer med upp till 60 minuters kraftfull bibehållen sugförmåga. Den 40% större behållaren betyder också färre avbrott. </div>", "<h1>Avancerad filtrering</h1> <div>Avancerad filtrering säkerställer att dammsugaren släpper ut renare luft och tömningssystemet 'point and shoot' möjliggör en mer hygienisk metod för att tömma behållaren. Inkluderar åtta verktyg och tillbehör för grundlig rengöring var som helst i hemmet.</div>", 1, "wireless");
    let productInfo = [
        w1
    ];
    let cartItems = [
        w1
    ];
    function addToCart(clicked) {
        for(let i = 0; i < cartItems.length; i++){
            if (productInfo[clicked] == cartItems[i]) ;
            else cartItems.push(productInfo[clicked]);
        }
    }
    function displayCart() {
        for(let i = 0; i < cartItems.length; i++){
            let modal = document.getElementById("myModal");
            let productContainer = document.createElement("div");
            modal.appendChild(productContainer);
            let imgContainer = document.createElement("div");
            let img = document.createElement("img");
            productContainer.appendChild(imgContainer);
            imgContainer.appendChild(img);
            let info = document.createElement("div");
            productContainer.appendChild(info);
            let productName = document.createElement("h3");
            info.appendChild(productName);
            let amountDiv = document.createElement("div");
            info.appendChild(amountDiv);
            let span = document.createElement("span");
            amountDiv.appendChild(span);
            let amountspan = document.createElement("span");
            amountDiv.appendChild(amountspan);
            let priceDiv = document.createElement("div");
            info.appendChild(priceDiv);
            let span2 = document.createElement("span");
            priceDiv.appendChild(span2);
            let priceSpan = document.createElement("span");
            priceDiv.appendChild(priceSpan);
        // img.src = cartItems[i].imgsmall;
        // productName.innerHTML = cartItems[i].name;
        // amountspan.innerHTML = cartItems[i].amount;
        }
    }
};

//# sourceMappingURL=index.a7a236c3.js.map
