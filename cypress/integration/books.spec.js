import * as GETbooks from '../support/request/GETbooks';
import * as addBooks from '../support/request/POSTbooks';
import * as deleteBooks from '../support/request/DELETEbooks';


describe('Books', () => {
    it('Listar todos os livros', () => {
        //chamamos a funçao allbooks e pegou o response 
        GETbooks.allBooks().should((response) => {
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
            expect(response.body.title).to.eq("Livro um")
        })
    })
    it('Deletar um livro', () => {
        // criei a variavel addbook e chamei a funcao addbooks dai o retorno dessa funcao eu armazenei na variavel resAddBooks
        addBooks.addBooks().then((resAddBooks) => {
        //console.log(resAddBooks);
        //criei a variavel deleteBooks e chamei a função deleteBooks, 
        //peguei o id que retornou no resAddBooks 
        //o que o should faz?
        deleteBooks.deleteBooks(resAddBooks.body.id).should((resDeleteBook) => {
        //console.log(resDeleteBook);    
            expect(resDeleteBook.status).to.eq(200)
        })
        })
    })
})