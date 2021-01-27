describe('Testing Persentaion Page', () => {
    it('Should contains the Registrera', () => {
        cy.visit("/Frontend/presentation.html")
        cy.contains("Prentation!")
    })
})