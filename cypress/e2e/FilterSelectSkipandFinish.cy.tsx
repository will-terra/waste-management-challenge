it("Should filter by not allowed on road, selects 20 yard skip and continues the order and cleans selection", () => {
  cy.viewport(1600, 900);
  cy.visit(`${Cypress.config().baseUrl}/`);
  cy.wait(3000);
  cy.get(':nth-child(7) > .gap-2 > [value="false"] > .undefined').click({ force: true });
  cy.get('.max-w-60').click();
  cy.get('.flex-wrap > :nth-child(5)').click();
  cy.get('.bg-lightBlue\\/30').should("exist");
  cy.get('.bottom-0 > :nth-child(2) > button > .undefined').click();
  cy.contains("Close").click();
  cy.get('.bg-lightBlue\\/30').should("not.exist");
})