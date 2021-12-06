window.onload = function () {
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
import { Vacuum } from "./models/Vacuum";

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
