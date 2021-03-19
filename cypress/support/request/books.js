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

function addBooks() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: {
            "id": 0,
            "title": "Livro um",
            "description": "Livro de uma pessoa",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2021-03-19T22:16:06.981Z"
          }


    })
}

export { addBooks};


function deleteBooks(idBook) {
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false    
        })
    }

export { deleteBooks }