describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })
    it('multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location("pathname").should("equal", "/")

        cy.getDataTest('nav-overview').click()
        cy.location("pathname").should("equal", "/overview")

        cy.getDataTest('nav-fundamentals').click()
        cy.location("pathname").should("equal", "/fundamentals")
    })
    it('intercepts', () => {
        //returning mock data
        cy.intercept('POST', 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })
    it.only('grudges', () => {
        cy.contains(/add some grudges/i)
        //shouldn't have any item in the list
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 0)
        })

        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('some grudge')
        }).as('input-grudge')
        cy.getDataTest('add-grudge-button').click()
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 1)
        })

        cy.get('@input-grudge').within(() => {
            cy.get('input').type('another grudge')
        })
        cy.getDataTest('add-grudge-button').click()
        cy.getDataTest('grudge-list').within(() => {
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contains.text', 'some grudge')
        })
    })
})