describe('Testing Login Page', () => {
    it('Should user be able to loggin', () => {
        cy.visit("/Frontend/index.html")
        cy.get("[name=username]").type("CoolUser")
        cy.get("[name=password]").type("123123123")
        cy.get("button[type=submit]").click()
        cy.contains("Välkommen CoolUser")
    })
})