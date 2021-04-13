/// <reference types="cypress" />

function allBooks() {
//chamada do tipo get para esse método e essa url
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false
    })
}

export { allBooks };

