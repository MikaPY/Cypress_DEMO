describe('Assert',function() {
    it('Assert test', function() {
        cy.visit("https://finance.dev.fabrique.studio/profile/")
        cy.viewport(1920, 1080) // Проверка окна просмотра
        cy.location("protocol").should('eq','https:') // Проверка протокола
        
    })
})