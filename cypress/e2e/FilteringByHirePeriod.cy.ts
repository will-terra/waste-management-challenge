it("Should filter by hire period", () => {
  cy.viewport(1600, 900);
  cy.visit(`${Cypress.config().baseUrl}/`);
  cy.wait(3000);
  cy.contains("Choose your Skip")
  cy.get('[value="7"] > .undefined').click();
  cy.get('.max-w-60').click();
  cy.contains("Ooops").should("exist")
})