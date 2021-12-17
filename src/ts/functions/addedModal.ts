
export function thankYou() {
  let tyModal: HTMLDivElement = document.createElement("div") as HTMLDivElement;
  tyModal.id = "myTyModal";
  tyModal.className = "tyModal";
  tyModal.style.display = "block";
  document.body.appendChild(tyModal);

  setTimeout(function () {
    tyModal.style.display = "none";
  }, 1500);

  let tyModCnt: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  tyModCnt.className = "tyModCnt";
  tyModal.appendChild(tyModCnt);

  let tyContent: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;
  tyContent.className = "thanksContent";
  tyContent.id = "tyContentId";
  tyModCnt.appendChild(tyContent);

  let tySpan: HTMLSpanElement = document.createElement(
    "span"
  ) as HTMLSpanElement;
  tySpan.className = "tySpanner";
  tySpan.innerText = "Din vara har lagts till i varukorgen.";
  tyContent.appendChild(tySpan);

  let theCheck = document.createElement("i");
  theCheck.className = "fa fa-check";
  theCheck.ariaHidden = "true";
  tySpan.appendChild(theCheck);

  window.onclick = function (event) {
    if (tyModal.style.display == "block") {

      if (tyModal.contains(event.target)) {
        tyModal.style.display = "none";
      }
    }
  };

}
