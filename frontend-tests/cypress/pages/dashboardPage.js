/// <reference types="cypress" />

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'
const navRoomButton = ':nth-child(1) > .btn'

// actions / functions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function navigateToRoomPage(cy, contentToConfirm){
    cy.get(navRoomButton).click()
    cy.contains(contentToConfirm)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

// exports
module.exports = {
    checkTitleOfDashboardPage,
    navigateToRoomPage,
    performLogout
}