/// <reference types="cypress" />

context('Home page', () => {
  beforeEach(() => {
    cy.fixture('site.json').then((config) => {
      cy.visit(config.url)
    })
  })

  const sizes = ['iphone-8', 'macbook-13']

  sizes.forEach((viewport) => {
    it('should load and display the home page', () => {
      cy.viewport(viewport)
      cy.wait(500)
      cy.contains(/gustavo/i).should('be.visible')
    })
  })

  it('should render the navigation menu', () => {
    cy.contains('find').should('be.visible')
    cy.contains('blog').should('be.visible')
    cy.contains('knowledge').should('be.visible')
    cy.contains('about').should('be.visible')
  })
})
