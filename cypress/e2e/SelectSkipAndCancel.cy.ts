it("Should Filter, select skip and cancel", () => {
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(3000);
    cy.contains("Choose your Skip")
    cy.viewport(1600, 900);
    cy.visit(`${Cypress.config().baseUrl}/`);
    cy.wait(3000);
    cy.contains("Choose your Skip");
    cy.get(':nth-child(3) > .gap-2 > [value="236"] > .undefined').click({ force: true })
    cy.get(':nth-child(4) > .gap-2 > [value="236"] > .undefined').click({ force: true })
    cy.get('.max-w-60').click();
    cy.get('.flex-wrap > :nth-child(1)').click();
    cy.get('.flex-wrap > :nth-child(1)').should("have.class", "bg-lightBlue/30");
    cy.contains('Cancel').click();
    cy.get('.flex-wrap > :nth-child(1)').should("have.class", "bg-secondaryDarkGray");
    cy.contains('Cancel').should("not.exist");

})