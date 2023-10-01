import 'cypress-localstorage-commands'
describe('Testando os caches da aplicação', () => {
  beforeEach(() => {
    cy.intercept(
      'GET', '**/search?query=**').as('getRequest')
    cy.visit('https://hackernews-seven.vercel.app/')
    cy.clearCookies()
    cy.wait('@getRequest')
  })

  context('verificando se os caches foram armazenados', () => {
    const typeReact = 'React'
    const typeCypress = 'Cypress'
    it('buscando pelo termo React', () => {
      cy.get('input')
        .clear()
        .should('be.visible')
        .type(`${typeReact}{enter}`)

      cy.wait('@getRequest')
      cy.getLocalStorage('search')
        .should('be.equal', typeReact)
    })

    it('buscando pelo termo Cypress', () => {
      cy.get('input')
        .should('be.visible')
        .clear()
        .type(`${typeCypress}`)
      cy.contains('Search')
        .should('be.visible')
        .click()

      cy.wait('@getRequest')
      cy.getLocalStorage('search')
        .should('be.equal', typeCypress)
    })

    it('buscando pelos termos React, Cypress e novamente pelo termo React', () => {
      cy.get('input')
        .should('be.visible')
        .clear()
        .type(`${typeReact}`)
      cy.contains('Search')
        .should('be.visible')
        .click()

      cy.getLocalStorage('search')
        .should('have.property', 'request').and('have.length', 2)
    })
  })
})
