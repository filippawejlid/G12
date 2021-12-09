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

})