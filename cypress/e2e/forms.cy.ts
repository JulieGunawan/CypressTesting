describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test if we are in the correct page', () => {
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-input').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('test@code.com')
        cy.contains(/Successfully subbed/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed/i).should('exist')
    })

})