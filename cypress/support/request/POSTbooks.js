function addBooks() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: {
            "id": 2,
            "title": "Livro um",
            "description": "Livro de uma pessoa",
            "pageCount": 0,
            "excerpt": "string",
            "publishDate": "2021-03-19T22:16:06.981Z"
          }


    })
}
//o nome do export deve ser igual ao nome da função pq eu estou exportando essa função
export { addBooks};


