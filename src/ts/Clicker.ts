export function clicker() {
	let modal: HTMLDivElement = document.getElementById(
		"myModal"
	) as HTMLDivElement;

	let btn: HTMLButtonElement = document.getElementById(
		"btnCart"
	) as HTMLButtonElement;

	let span: HTMLSpanElement = document.getElementsByClassName(
		"close"
	)[0] as HTMLSpanElement;

	btn.onclick = function (event) {
		event.preventDefault();
		event.stopPropagation();
		modal.style.display = "block";
	};

	span.addEventListener("click", function () {
		modal.style.display = "none";
	});

	window.onclick = function (event) {
		if (modal.style.display == "block") {
			let modC = modal.querySelector(".modal-content");
			if (!modC.contains(event.target)) {
				modal.style.display = "none";
			}
		}
	};
}
