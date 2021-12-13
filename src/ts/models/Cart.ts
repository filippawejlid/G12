// import { cartItems } from "../addToCart";
import { minusItem } from "../minusitem";
import { productInfo } from "../Products";
import { Order } from "./Order";
import { Vacuum } from "./Vacuum";

export class Cart {

    cartItems: Order[];

    constructor()
        {
        this.cartItems =
        JSON.parse(localStorage.getItem("cartItems")) || [];

    }

    addToCart (i: number) {

        let productContainer = document.getElementById("objectContainer" + i);

        
        if (this.cartItems.length == 0) {

            productInfo[i].beenAdded = true;
            
            let newItem: Vacuum = productInfo[i];
            
            let item: Order = new Order(newItem, 1);
            
            productInfo[i].identification = "objectContainer" + i;
            item.Vacuum.identification = "objectContainer" + i;

            this.cartItems.push(item)

        }

        else if (productInfo[i].beenAdded == true) {

            for (let i = 0; i < this.cartItems.length; i++) {

                if (productContainer.id === this.cartItems[i].Vacuum.identification) {

                    this.cartItems[i].Amount++;
    
                    console.log("Plussa amount " + this.cartItems[i].Amount);
                    break;
                }
            }
        }

        else if (productInfo[i].beenAdded == false) {

            console.log("hamnar vi här?");
            

            productInfo[i].beenAdded = true;
            
            let newItem: Vacuum = productInfo[i];
            
            let item: Order = new Order(newItem, 1);
            
            productInfo[i].identification = "objectContainer" + i;
            item.Vacuum.identification = "objectContainer" + i;

            this.cartItems.push(item)
        }

        for (let i = 0; i < this.cartItems.length; i++) {
            localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
            console.log(this.cartItems);
            
        }
    }

    displayCart () {
        // this.cartItems =
        // JSON.parse(localStorage.getItem("cartItems")) || [];

        let total: HTMLSpanElement = document.getElementById(
            "totalSpan"
        ) as HTMLSpanElement;
        total.className = "totalSpans";
        total.innerHTML = " ";
        let modal: HTMLDivElement = document.getElementById(
            "displayCartModal"
        ) as HTMLDivElement;
        modal.innerHTML = " ";
        let sumList: number[] = [];

        console.log(this.cartItems);
        
    
        for (let i = 0; i < this.cartItems.length; i++) {
            console.log("hallå? 2");

            //Skapa alla element som produktens info ska ligga i
    
            let productContainer: HTMLDivElement = document.createElement("div");
            productContainer.className = "productContainer";
    
            let imgContainer: HTMLDivElement = document.createElement("div");
            imgContainer.className = "imgContainer";
    
            let info: HTMLDivElement = document.createElement("div");
            info.className = "info";
    
            let adjustments: HTMLDivElement = document.createElement("div");
            adjustments.className = "adjustments";
            let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
            trashCan.id = "trasher";
            trashCan.className = "fa fa-trash";
            trashCan.ariaHidden = "true";
    
            trashCan.addEventListener("click", () => {
                minusItem();
            });
    
            let plus = document.createElement("div");
            plus.className = "plus";
            plus.innerHTML = "<i class='far fa-plus-square'></i>";
    
            let productName: HTMLHeadingElement = document.createElement("h3");
    
            let amountDiv: HTMLDivElement = document.createElement("div");
            amountDiv.className = "class";
            let amountspan: HTMLSpanElement = document.createElement("span");
            amountspan.id = "amount" + i;
    
            let priceDiv: HTMLDivElement = document.createElement("div");
            priceDiv.id = "price" + i;
            priceDiv.className = "price";
            let priceSpan: HTMLSpanElement = document.createElement("span");


    
            modal.appendChild(productContainer);
            productContainer.appendChild(imgContainer);
            productContainer.appendChild(info);
            productContainer.appendChild(adjustments);
    
            adjustments.appendChild(trashCan);
    
            info.appendChild(productName);
            info.appendChild(amountDiv);
            info.appendChild(priceDiv);
    
            amountDiv.appendChild(amountspan);
    
            priceDiv.appendChild(priceSpan);
    
            imgContainer.innerHTML = this.cartItems[i].Vacuum.imgsmall;
            productName.innerHTML = this.cartItems[i].Vacuum.productName;
            amountspan.innerHTML = `Antal: ${this.cartItems[i].Vacuum.amount.toString()}`;
            priceSpan.innerHTML = `${this.cartItems[i].Vacuum.price.toString()} kr`;
    
            sumList.push(this.cartItems[i].Vacuum.price * this.cartItems[i].Vacuum.amount);
            console.log("hallå? 3");

        }
    
        //Räkna ut total
    
        let sum = sumList.reduce(function (a, b) {
            return a + b;
        }, 0);
    
        total.innerHTML = `${sum.toString()} kr`;
    
        console.log(sum);
    }
    
    checkoutCart () {

        // this.cartItems =
        // JSON.parse(localStorage.getItem("cartItems")) || [];

        let total: HTMLSpanElement = document.getElementById(
  	    	"totalSpanCheckout"
      	) as HTMLSpanElement;
        total.className = "totalSpans";
    	total.innerHTML = " ";
    	let sumList: number[] = [];
        let checkout: HTMLDivElement = document.getElementById("checkoutCart") as HTMLDivElement;
        checkout.innerHTML = " ";

        console.log("hallå? 1");
        
    
        for (let i = 0; i < this.cartItems.length; i++) {
            console.log("hallå? 2");

            //Skapa alla element som produktens info ska ligga i
    
            let productContainer: HTMLDivElement = document.createElement("div");
            productContainer.className = "productContainer";
    
            let imgContainer: HTMLDivElement = document.createElement("div");
            imgContainer.className = "imgContainer";
    
            let info: HTMLDivElement = document.createElement("div");
            info.className = "info";
    
            let adjustments: HTMLDivElement = document.createElement("div");
            adjustments.className = "adjustments";
            let trashCan: HTMLElement = document.createElement("i") as HTMLElement;
            trashCan.id = "trasher";
            trashCan.className = "fa fa-trash";
            trashCan.ariaHidden = "true";
    
            trashCan.addEventListener("click", () => {
                minusItem();
            });
    
            let plus = document.createElement("div");
            plus.className = "plus";
            plus.innerHTML = "<i class='far fa-plus-square'></i>";
    
            let productName: HTMLHeadingElement = document.createElement("h3");
    
            let amountDiv: HTMLDivElement = document.createElement("div");
            amountDiv.className = "class";
            let amountspan: HTMLSpanElement = document.createElement("span");
            amountspan.id = "amount" + i;
    
            let priceDiv: HTMLDivElement = document.createElement("div");
            priceDiv.id = "price" + i;
            priceDiv.className = "price";
            let priceSpan: HTMLSpanElement = document.createElement("span");


    
            checkout.appendChild(productContainer);
            productContainer.appendChild(imgContainer);
            productContainer.appendChild(info);
            productContainer.appendChild(adjustments);
    
            adjustments.appendChild(trashCan);
    
            info.appendChild(productName);
            info.appendChild(amountDiv);
            info.appendChild(priceDiv);
    
            amountDiv.appendChild(amountspan);
    
            priceDiv.appendChild(priceSpan);
    
            imgContainer.innerHTML = this.cartItems[i].Vacuum.imgsmall;
            productName.innerHTML = this.cartItems[i].Vacuum.productName;
            amountspan.innerHTML = `Antal: ${this.cartItems[i].Vacuum.amount.toString()}`;
            priceSpan.innerHTML = `${this.cartItems[i].Vacuum.price.toString()} kr`;
    
            sumList.push(this.cartItems[i].Vacuum.price * this.cartItems[i].Vacuum.amount);
            console.log("hallå? 3");

        }
    
        //Räkna ut total
    
        let sum = sumList.reduce(function (a, b) {
            return a + b;
        }, 0);
    
        total.innerHTML = `${sum.toString()} kr`;
    
        console.log(sum);
    }
}