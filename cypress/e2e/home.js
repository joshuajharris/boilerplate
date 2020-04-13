describe('homepage', () => {
  it('learn react link is present', () => {
    cy.visit(`/`);
    cy.location('pathname').should('include', '/');
    cy.findByText(/^learn react$/i);
  });
});
