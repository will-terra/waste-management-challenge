it("Should filter by cost per tonne, and transport cost", () => {
  cy.viewport(1600, 900);
  cy.visit(`${Cypress.config().baseUrl}/`);
  cy.wait(3000);
  cy.contains("Choose your Skip");
  cy.get(':nth-child(3) > .gap-2 > [value="236"] > .undefined').click({
    force: true,
  });
  cy.get(':nth-child(4) > .gap-2 > [value="236"] > .undefined').click({
    force: true,
  });
  cy.get(".max-w-60").click();
  cy.contains("20 Yard Skip").should("exist");
  cy.contains("40 Yard Skip").should("exist");
  cy.contains("30 Yard Skip").should("not.exist");
});
