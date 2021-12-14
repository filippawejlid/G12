// import { addToCart } from "./addToCart";
import { productInfo } from "./Products";
// import { cartItems } from "./addToCart";
import { thankYou } from "./thankYou";
import { itemCount } from "./itemcounter";
import { Cart } from "./models/Cart";

let productInfoStorage = JSON.parse(sessionStorage.getItem("productInfo[i]"));

if (productInfoStorage != null) {
	console.log(productInfoStorage.ppinfoheroheader);
	console.log(productInfoStorage.imghero);
	console.log(productInfoStorage.h1nfopage1);
	console.log(productInfoStorage.discriptioninfopage1);
	console.log(productInfoStorage.imgsmall);
	console.log(productInfoStorage.h1infopage2);
	console.log(`${productInfoStorage.price.toString()} kr`);
}

// GETELEMENTBYID

export function productinfo(i: number) {
	
	let cart = new Cart();

	// productinfocontainer diven ska appendas till den här
	let productContentContainer: HTMLDivElement = document.getElementById(
		"productcontentcontainer"
	) as HTMLDivElement;

	// ska skapa diven productmodalcontainer
	let productModalContainer = document.createElement("div");
	productModalContainer.className = "productmodalcontainer";

	// div container för hero. Ska appendas till  productModalContainer

	let productImgHero = document.createElement("div");
	productImgHero.className = "productimghero";
	productImgHero.innerHTML = productInfo[i].ppinfoheroheader;
	//productInfoHeroContainer.style.backgroundImage = productInfo[i].imghero;

	// diven för productinfoherocontainer
	let productInfoHeroContainer = document.createElement("div");
	productInfoHeroContainer.className = "productinfoherocontainer";

	// diven som ska ha class productinfohero och appendas till productinfoherocontainer
	let productInfoHero = document.createElement("div");
	productInfoHero.className = "h1nfopage1";
	productInfoHero.innerHTML = productInfo[i].h1nfopage1;

	// diven som ska innehålla discriptioninfopage1 och appendas till productInfoHeroContainer
	let discriptionInfoPage1 = document.createElement("div");
	discriptionInfoPage1.className = "discriptioninfopage1";
	discriptionInfoPage1.innerHTML = productInfo[i].discriptioninfopage1;

	// diven som ska bli en container för resterande information
	let continer = document.createElement("div");
	continer.className = "container";

	// div som ska vara container för den lilla bilden, ska ha class productimgleft och appendas till container
	let productImgLeft = document.createElement("div");
	productImgLeft.className = "productimgleft";
	productImgLeft.innerHTML = productInfo[i].imgsmall;

	// div som ska vara en container för h1infopage2 och discriptioninfopage2
	let productInfoRight = document.createElement("div");
	productInfoRight.className = "productinforight";
	productInfoRight.innerHTML = productInfo[i].h1infopage2;

	// diven som ska ha class discriptioninfopage2" och hålla discriptioninfopage2" och appendas till productinforight
	let discriptionInfoPage2 = document.createElement("div");
	discriptionInfoPage2.className = "discriptioninfopage2";
	discriptionInfoPage2.innerHTML = productInfo[i].discriptioninfopage2;

	// h2 för pris och ska appendas till discriptionInfoPage2
	let price = document.createElement("h2");
	price.className = "price";
	price.innerHTML = `${productInfo[i].price.toString()} kr`;

	// btncontainer div, class btncontainer, ska appendas till productmodalcontainer
	let btnContainer = document.createElement("div");
	btnContainer.className = "btncontainer";

	let btnBack = document.createElement("button");
	btnBack.className = "back";
	btnBack.innerHTML = "Stäng";
	btnBack.addEventListener("click", () => {
		productModalContainer.style.display = "none";
	});

	let add = document.createElement("button");
	add.className = "addtocart";
	add.innerHTML = "Lägg till i varukorgen";
	add.addEventListener("click", () => {
		cart.addToCart(productInfo[i]);
		thankYou();
		itemCount();
	}); //Här har jag lagt till eventlistener ta ej bort

	// APPENDCHILD
	productContentContainer.appendChild(productModalContainer);
	productModalContainer.appendChild(productImgHero);
	productModalContainer.appendChild(productInfoHeroContainer);
	productInfoHeroContainer.appendChild(productInfoHero);
	productInfoHeroContainer.appendChild(discriptionInfoPage1);
	productModalContainer.appendChild(continer);
	continer.appendChild(productImgLeft);
	continer.appendChild(productInfoRight);
	productInfoRight.appendChild(discriptionInfoPage2);
	discriptionInfoPage2.appendChild(price);
	productModalContainer.appendChild(btnContainer);
	btnContainer.appendChild(btnBack);
	btnContainer.appendChild(add);

	sessionStorage.setItem("productInfo[i]", JSON.stringify(productInfo[i]));


}
