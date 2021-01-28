
// Skriva en test för login.

describe("Login form", () => {
    it("Can sign in", () => {
        cy.visit("/Frontend/index.html");
        cy.get("form");
        cy.get("input[name='username']").type("CoolUser").should("have.value", "CoolUser");
        cy.get("input[name='password']").type("123123123").should("have.value", "123123123");
        cy.get("form").submit();
        cy.url().should("include","start.html").end()
    });

    it("Can't sign in", () => {
        cy.visit("/Frontend/index.html");
        cy.get("form");
        cy.get("input[name='username']").type("CoolUser");
        cy.get("input[name='password']").type("1231231235");
        cy.get("form").submit();
        cy.contains("Fel användarnamn eller lösenord!").end()
    });

    it("can register", () => {
        cy.visit("/Frontend/index.html");
        cy.get("body > main > center > form > div:nth-child(3) > a").click();
        cy.url().should("include","register.html").end()
    })

    it ("Wrong username, Caps Lock is on", () => {
        cy.visit("/Frontend/index.html");
        cy.get("form");
        cy.get("input[name='username']").type("COOLUSER");
        cy.get("input[name='password']").type("123123123");
        cy.get('form').submit();
        cy.contains("Fel användarnamn eller lösenord!").end()

    })
})





