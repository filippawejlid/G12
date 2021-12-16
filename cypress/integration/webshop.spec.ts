describe ("webshop test", () => {

    it("it should add product to cart", () => {
        
        cy.visit("http://localhost:1234");

        cy.get("#addtocart11").click();

        cy.get("#btnCart").click();

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

    it("it should add product to checkout cart", () => {
        
        cy.visit("http://localhost:1234");

        cy.get("#addtocart11").click();

        cy.get("#btnCart").click();

        cy.get("#displayCartModal").should("have.length", 1)

        cy.get("#checkoutTag").click();
        
        cy.get("#checkoutCart").should("have.length", 1)

    });
    
    it("it should open read more modal on click", () => {
            
        cy.visit("http://localhost:1234");
    
        cy.get(".readmore:last").click();
    
        cy.get(".productmodalcontainer").should("have.css", "display", "block")
    });

    it("it should add product to cart from infomodal", () => {
        
        cy.visit("http://localhost:1234");
    
        cy.get(".readmore:last").click();
    
        cy.get(".productmodalcontainer").should("have.css", "display", "block")

        cy.get(".addtocart:last").click();

        cy.get("#btnCart").click();

        cy.get("#displayCartModal").should("have.length", 1)

    });

    it("it should test if read more modal contains html", () => {
            
        cy.visit("http://localhost:1234");
    
        cy.get(".readmore:last").click();
    
        cy.get(".productmodalcontainer").should("have.css", "display", "block");

        cy.get(".productmodalcontainer").should("not.be.empty")

    });

    // it("it should not submit form", () => {
            
    //     cy.visit("http://localhost:1234");

    //     cy.get("#btnCart").click();

    //     cy.get("#checkoutTag").click();

    //     cy.get("#validationTooltip01").type("a")
    //     cy.get("#validationTooltip02").type("a")
    //     cy.get("#validationTooltip0").type("a@f")
    //     cy.get("#validationTooltip03").type("2222 2222 2222 2222")
    //     cy.get("#validationTooltip04").type("f")
    //     cy.get("#validationTooltip05").type("February 2023")
    //     cy.get("#validationTooltip05").type("222")
    
    //     cy.get("#formButton").click();
    
    //     cy.get("#thankyou").should("not.be.empty")
    // });


    //For unfinished functions


    it("it should subtract from amount", () => {
        
        cy.visit("http://localhost:1234");

        cy.get("#addtocart11").click();
        
        cy.get("#addtocart11").click();

        cy.get("#btnCart").click();

        cy.get("#amount0").should("have.html", "Antal: 2")

        cy.get("#minusBtn0").click();

        cy.get("#amount0").should("have.html", "1")
        
    });

    it("it should add to amount", () => {
        
        cy.visit("http://localhost:1234");

        cy.get("#addtocart11").click();
        
        cy.get("#btnCart").click();

        cy.get("#amount0").should("have.html", "Antal: 1")

        cy.get("#plusBtn").click();

        cy.get("#amount0").should("have.html", "2")
        
    });
});