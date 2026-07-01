describe('Home page', () => {
  it('loads successfully', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})