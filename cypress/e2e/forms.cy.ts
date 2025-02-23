describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test if we are in the correct page', () => {
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-input').find('input').type('test@code.io')
        cy.getDataTest('subscribe-button').click()
    })
})