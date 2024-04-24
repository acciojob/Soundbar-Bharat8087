describe('Soundbar functionality', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Plays sound on button click', () => {
        cy.get('.btn').first().click();
        cy.get('audio').should('have.prop', 'paused', false);
    });

    it('Stops sound on stop button click', () => {
        cy.get('.btn').first().click();
        cy.get('.stop').click();
        cy.get('audio').should('have.prop', 'paused', true);
    });
});
