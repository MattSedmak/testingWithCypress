describe('Testing Register Page', () => {
    it('Should contains the Registrera', () => {
        cy.visit("/Frontend/register.html")
        cy.contains("Registrera")
    })
    it('Should have password confirmation input', () => {
        cy.visit("/Frontend/register.html")
        cy.get('[name=passwordConfirm]').then(($el) => {
            Cypress.dom.isDom($el)
        })
    })
    it("Should update the username", () => {
        cy.visit("/Frontend/register.html")
        cy.get("[name=username]")
            .type("arash.raji")
            .should("have.value", "arash.raji")
    })
    it("Should validate Email", () => {
        cy.visit("/Frontend/register.html")
        cy.get("[name=email]")
            .type("arash.raji")
        cy.get("input[type=submit]").click()
        cy.contains("För kort eller för långt användarnamn!")
    })

    it("Should password and confirmation be matched", () => {
        cy.visit("/Frontend/register.html")
        cy.get("[name=username]").type("arash.raji")
        cy.get("[name=email]").type("arash.raji@gmail.com")
        cy.get("[name=password]").type("1234")
        cy.get("[name=passwordConfirm]").type("123433")
        cy.get("input[type=submit]").click()
        cy.contains("Lösenorden överensstämmer inte!")
    })

})