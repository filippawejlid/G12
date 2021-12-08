// GETELEMENTBYID
let showModalId: HTMLDivElement = document.getElementById(
  "showmodal"
) as HTMLDivElement;

//let readmore:HTMLButtonElement = document.getElementById("readmorebtn")

let readMoreBtnId: HTMLButtonElement = document.getElementById(
  "readmore"
) as HTMLButtonElement;

let span: HTMLButtonElement = document.getElementById(
  "close"
) as HTMLButtonElement;

// EVENTLISTENER
readMoreBtnId.addEventListener("click", productinfo);
span.addEventListener("click", close);

export function productinfo() {
  showModalId.style.display = "inherit";
}

export function close() {
  showModalId.style.display = "none";
}

// <!-- Modal -->
//
//   <div id="showmodal">
//   <div class="productinfocontainer">
//     <div class="productimghero">
//       <h1 class="ppheroheader">Dyson Cyclone V10 Absolute</h1>
//     </div>
//     <div class="productinfoherocontainer">
//       <div class="productinfohero">
//         <h1>Oslagbar prestanda</h1>
//         <div
//           >Dyson Cyclone V10 Absolute kommer med upp till 60 minuters
//           kraftfull bibehållen sugförmåga. Den 40% större behållaren betyder
//           också färre avbrott.
//         </div>
//       </div>
//     </div>
//     <div class="continer">
//       <div class="productimgleft">
//         <img
//           src="/src/assets/Sladdlös-Dyson-Cyclone-V10.png"
//           alt="Bild på en dammsugare"
//           width="200"
//           height="250"
//         />
//       </div>
//       <div class="productinforight">
//         <h1>Avancerad filtrering</h1>
//         <div
//           >Avancerad filtrering säkerställer att dammsugaren släpper ut
//           renare luft och tömningssystemet "point and shoot" möjliggör en
//           mer hygienisk metod för att tömma behållaren. Inkluderar åtta
//           verktyg och tillbehör för grundlig rengöring var som helst i
//           hemmet.

//           <h2>Pris: 5 190 kr</h2>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div class="btncontainer">
//     <button class="back">Se andra dammsugare</button>
//     <button class="addtocartpp">Lägg till i varukorgen</button>
//   </div>
// </div>
