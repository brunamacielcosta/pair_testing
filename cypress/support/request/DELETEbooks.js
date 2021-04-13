/// <reference types="cypress" />

//funcao que chama a url com parametro idBook
function deleteBooks(idBook) {
    //chamada do tipo delete para esse método e essa url
        return cy.request({ 
            method: 'DELETE',
            //concatenei a url
            url: `Books/${idBook}`,
            failOnStatusCode: false
        })
    }
    export { deleteBooks };