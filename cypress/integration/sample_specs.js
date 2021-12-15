
describe('Connection check', () => {
    it('Visits the Game', () => {
        cy.visit('http://127.0.0.1:5500/index.html')

        cy.contains('game')
     
    })
})

describe('Image checks', () => {
    it('Check for presence of character and stone image', () => {
        cy.get('div[class="game"]').find("img").should('be.visible');
    });
})
