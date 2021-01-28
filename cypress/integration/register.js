describe("Register a user", () => {
  //test if alla inputs are empty - should show error
  it("can't log in with empty inputs", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").should("have.value", "");
    cy.get("input[name='email']").should("have.value", "");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("För kort eller för långt användarnamn!").end();
  });

  // testa om bara namn fylls i, alla andra fält är tomma - should show error
  it("Only name filled in", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']").should("have.value", "");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("Felformatterad e-postadress!").end();
  });
  // Testa om username är för kort
  it("Name too short", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("m").should("have.value", "m");
    cy.get("input[name='email']").should("have.value", "");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("För kort eller för långt användarnamn!").end();
  });
  // Testa om username är för långt
  it("Nametoo long", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']")
      .type("matthewasdfgh")
      .should("have.value", "matthewasdfgh");
    cy.get("input[name='email']").should("have.value", "");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("För kort eller för långt användarnamn!").end();
  });

  // testa om bara email fylls i, alla andra fält är tomma - should be error
  it("Only email filled in", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").should("have.value", "");
    cy.get("input[name='email']")
      .type("matt@gmail.com")
      .should("have.value", "matt@gmail.com");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("För kort eller för långt användarnamn!").end();
  });

  // testa om namn fylls i och fel email format - should be error
  it("Name filled but wrong email format", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']")
      .type("matt.gmail")
      .should("have.value", "matt.gmail");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("Felformatterad e-postadress!").end();
  });

  // Testa om namn, email fylls i men inte lösenord - should be error.
  it("Name,email filled but not password", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']")
      .type("matt@gmail.com")
      .should("have.value", "matt@gmail.com");
    cy.get("input[name='password']").should("have.value", "");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("Du har valt för kort lösenord").end();
  });

  // Testa om namn, email, ett lösenord inte det andra eller fel lösenordet - should be error.
  it("Name,email filled but only first password", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']")
      .type("matt@gmail.com")
      .should("have.value", "matt@gmail.com");
    cy.get("input[name='password']").type("123").should("have.value", "123");
    cy.get("input[name='passwordConfirm']").should("have.value", "");
    cy.get("form").submit();
    cy.contains("Lösenorden överensstämmer inte!").end();
  });

  //Testa om lösenordet än mindre än 3 tecken
  it("Password less than 3 characters", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']")
      .type("matt@gmail.com")
      .should("have.value", "matt@gmail.com");
    cy.get("input[name='password']").type("1").should("have.value", "1");
    cy.get("input[name='passwordConfirm']").type("1").should("have.value", "1");
    cy.get("form").submit();
    cy.contains("Du har valt för kort lösenord").end();
  });

  // Testa om alla fält är infylld korrect - should visa 'Anvädaren registrerad! Logga in här!'
  it("All fields correctly filled in", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']")
      .type("matt@gmail.com")
      .should("have.value", "matt@gmail.com");
    cy.get("input[name='password']").type("123").should("have.value", "123");
    cy.get("input[name='passwordConfirm']")
      .type("123")
      .should("have.value", "123");
    cy.get("form").submit();
    cy.contains("Anvädaren registrerad! Logga in här!").end();
  });

  // Går till logga in sidan efter register
  it("Går till logga in sidan efter register", () => {
    cy.visit("/register.html");
    cy.get("form");
    cy.get("input[name='username']").type("matt").should("have.value", "matt");
    cy.get("input[name='email']")
      .type("matt@gmail.com")
      .should("have.value", "matt@gmail.com");
    cy.get("input[name='password']").type("123").should("have.value", "123");
    cy.get("input[name='passwordConfirm']")
      .type("123")
      .should("have.value", "123");
    cy.get("form").submit();
    cy.contains("Anvädaren registrerad! Logga in här!");
    cy.get("marquee > a").click();
    cy.url().should("include", "/").end();
  });
});
