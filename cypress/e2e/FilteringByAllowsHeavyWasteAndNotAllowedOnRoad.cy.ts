it("Should filter by allows heavy waste and not allowed on road", () => {
  cy.viewport(1600, 900);
  cy.visit(`${Cypress.config().baseUrl}/`);
  cy.wait(3000);
  cy.contains("Choose your Skip");
  cy.get(':nth-child(6) > .gap-2 > [value="true"] > .undefined').click({
    force: true,
  });
  cy.get(':nth-child(6) > .gap-2 > [value="true"] > .undefined').click({
    force: true,
  });
  cy.get(".max-w-60").click();
  cy.contains("20 Yard Skip").should("exist");
});
