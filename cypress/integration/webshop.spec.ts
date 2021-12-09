describe ("webshop test", () => {

    it("it should add product to cart", () => {
        
        cy.visit("http://localhost:1234");

        cy.get(".addtocart:last").click();

        cy.get("#displayCartModal").should("have.length", 1)
    });

    it("it should open cartmodal on click", () => {
        
        cy.visit("http://localhost:1234");

        cy.get("#btnCart").click();

        cy.get("#myModal").should("have.css", "display", "block")
    });

    it("it should close modal on click", () => {
        
        cy.visit("http://localhost:1234");
        
        cy.get("#btnCart").click();

        cy.get("#myModal").should("have.css", "display", "block")

        cy.get("#btnHandla").click();

        cy.get("#myModal").should("have.css", "display", "none")
    });

    it("it should load products on page", () => {
        
        cy.visit("http://localhost:1234");

        cy.get("#wirelesscontainer").should("not.be.empty");
        cy.get("#powerfullcontainer").should("not.be.empty");
        cy.get("#robotcontainer").should("not.be.empty");

    });

    //For unfinished functions

    // it("it should add product to checkout cart", () => {
        
    //     cy.visit("http://localhost:1234/checkout.*.html");

    //     cy.get(".button").click();

    //     cy.get("#checkoutCart").should("contain", "div")
    // });

    // it("it should open read more modal on click", () => {
        
    //     cy.visit("http://localhost:1234");

    //     cy.get("#readmorebtn").click();

    //     cy.get("#modal").should("have.css", "display", "block")
    // });

    // it("it should test if read more modal contains info", () => {
        
    //     cy.visit("http://localhost:1234");

    //     cy.get("#readmorebtn").click();

    //     cy.get("#modal").should("have.css", "display", "block")
        
    //     cy.get("#modalcontent").should("not.be.empty")

    // });

    // it("it should subtract from amount", () => {
        
    //     cy.visit("http://localhost:1234");

    //     cy.get("#addtocart11").click();
        
    //     cy.get("#addtocart11").click();

    //     cy.get("#btnCart").click();

    //     cy.get("#amount0").should("have.html", "Antal: 2")

    //     cy.get("#subtractbutton").click();

    //     cy.get("#amount0").should("have.html", "1")
        
    // });

    // it("it should add to amount", () => {
        
    //     cy.visit("http://localhost:1234");

    //     cy.get("#addtocart11").click();
        
    //     cy.get("#btnCart").click();

    //     cy.get("#amount0").should("have.html", "Antal: 1")

    //     cy.get("#addbutton").click();

    //     cy.get("#amount0").should("have.html", "2")
        
    // });
})