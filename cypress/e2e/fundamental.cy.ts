import { Typography } from "@mui/material"

describe('Fundamental tests', () => {
  beforeEach(() => {
    cy.visit('/fundamentals')
  })
  it('Contains correct header test', () => {
    cy.get('[data-test="fundamentals-header"]').contains(
      /Testing Fundamentals/i
    )
    cy.get('[data-test="fundamentals-header"]').should('contain', 'Testing Fundamentals')
  })
  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
  it.only('Only focus on single test', () => {
    // cy.get('[data-test="accordion-item-6"]').should('exist')
    cy.get('[data-test="accordion-item-6-title"]').contains('Fundamental 6) Focussing on a single test')
   
  })

})