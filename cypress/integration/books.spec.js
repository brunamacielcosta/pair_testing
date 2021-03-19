import * as requests from '../support/request/books';
import * as addBooks from '../support/request/books';
import * as deleteBooks from '../support/request/books'

describe('Books', () => {
    it('Listar todos os livros', () => {
        //chamamos a funçao allbooks e pegou o response 
        requests.allBooks().should((response) => {
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).not.null
        })
    })
    it('Incluir um livro', () => {
        addBooks.addBooks().should((response) => {
            //cy.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).not.null
            //expect(response.body.title).contain("Livro") 
            expect(response.body.title).to.eq("Livro um")
        })
    })
    it('Deletar um livro', () => {

    })
})