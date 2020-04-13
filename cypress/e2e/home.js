describe('homepage', () => {
  it('learn react link is present', () => {
    cy.location('pathname').should('include', '/');
    cy.findByText(/^learn react$/i);
  });
});
