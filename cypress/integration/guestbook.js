describe("Access guest book", () => {
  it("Redirect to guestbook page on click", () => {
    cy.visit("/Frontend/start.html");
    cy.get("ul");
    cy.get("li:nth-child(1)>a ").click();
    cy.url().should("include", "/guestbook.html").end();
  });

  it("Post a wrong message", () => {
    cy.visit("/Frontend/guestbook.html");
    cy.get("form");
    cy.get("textarea").type("a");
    cy.get("form").submit();

    cy.contains("För kort meddelande!").end();
  });

  it("Add a message", () => {
    cy.visit("/Frontend/guestbook.html");
    cy.get("form");
    cy.get("textarea").type("Post a message");
    cy.get("form").submit();

    cy.contains("Post a message").end();
  });
  it("Delete a message", () => {
    cy.visit("/Frontend/guestbook.html");
    cy.get("form");
    cy.get("textarea").type("Post a message");
    cy.get("form").submit();

    cy.get("#entries > p > a").click();
    cy.contains("Gästbok!").end();
  });
  it("Redirect to start", () => {
    cy.visit("/Frontend/guestbook.html");

    cy.get("h3");
    cy.get("a").click();

    cy.url().should("include", "/start.html").end();
  });
});
