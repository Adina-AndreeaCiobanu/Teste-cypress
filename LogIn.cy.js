describe('LogIn', () => {
beforeEach(( )=>{
cy.visit(Cypress.env('login_url'))
})
    const valid_user = Cypress.env('user')
    const valid_pass =Cypress.env('password')

    it('Log in with valid credentials', () =>{
        cy.contains ('Contul meu').click()
        cy.contains('Autentificare').click()
        cy.get('input[type="email"]').type(valid_user)
        cy.get('input[type="password"]').type(valid_pass)
        cy.get('.form-footer > .btn').click()
        cy.get('.page-title').contains('Contul meu').should('be.visible')
    })

    it('Add book to favourite',()=>{
        cy.get('#search-form').click() .type('ciupercile')
        cy.get('.button-search').eq(0).click()
        cy.contains('Adaugă la favorite').click()
        cy.contains('Intră în cont').click()
        cy.get('input[type="email"]').type(valid_user)
        cy.get('input[type="password"]').type(valid_pass)
        cy.get('.form-footer > .btn').click()
        cy.get('.icon-heart-o').click()

    })

  
  })