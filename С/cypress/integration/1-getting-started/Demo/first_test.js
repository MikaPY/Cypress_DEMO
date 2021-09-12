describe("Log in", function() {
    it("Sign in", function() {
        cy.visit("https://finance.dev.fabrique.studio/")
        cy.contains("Далее").click() 
        cy.get('input[type="email"]').type('societyhaha@gmail.com') // Проверка формы 'Emai'
        cy.get('input[type="password"]').type('societyhaha') // Проверка формы 'Password'
        cy.get('input[type="submit"]').click() // Проверка кнопки 'Далее'
    })
})