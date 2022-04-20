describe('Header test', () =>{
    it('Clarusway events', () => {
        cy.visit('http://localhost:3000/login')
        console.log('Münir nasilsin')
        cy.wait(5000)
        cy.contains('CLARUSWAY NEWS').wait(2000)
        // Registere tıkladığımda url değişmeli
        cy.contains("Register").click().wait(2000)
        cy.url().should("include", "http://localhost:3000/register")
        cy.contains('CLARUSWAY NEWS').click()
      })
})