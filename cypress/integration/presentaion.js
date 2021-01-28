describe("Access presentation", () => {
  it("Access presentation and redirect to start page on click", () => {
    cy.visit("/start.html");
    cy.get("ul");
    cy.get("li:nth-child(2) > a").click();

    cy.get("h3");
    cy.get("a").click();
    cy.url().should("include", "/start.html").end();
  });
});
