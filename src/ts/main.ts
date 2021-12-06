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
