describe("Log out", () => {
    it("Can sign out", () => {
        cy.visit("/Frontend/start.html");
        cy.get("ul");
        cy.get("li:last-child>a").click();
        cy.url().should("include", "/Frontend").end();

    });
})