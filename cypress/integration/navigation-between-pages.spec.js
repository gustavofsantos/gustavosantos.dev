/// <reference types="cypress" />

context('Navigation', () => {
  beforeEach(() => {
    cy.fixture('site.json').then((config) => {
      cy.visit(config.url)
    })
  })

  const sizes = ['iphone-8', 'macbook-13']

  sizes.forEach((vp) => {
    it('should navigate to find page', () => {
      cy.viewport(vp)
      cy.wait(500)
      cy.contains(/find/i).click()

      // in find page
      cy.location().should((location) => {
        expect(location.pathname).to.eq('/find')
      })

      cy.contains(/search anything/i).should('be.visible')
      cy.contains(/search by tags/i).should('be.visible')
    })

    it('should navigate to blog page', () => {
      cy.viewport(vp)
      cy.wait(500)
      cy.contains(/blog/i).click()

      // in blog page
      cy.location((location) => {
        expect(location.pathname).to.eq('/blog')
      })

      cy.contains(/blog/i).should('be.visible')
    })
  })
})
