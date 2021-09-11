describe('Text box with max characters', () => {
    beforeEach(() => {
        cy.visit('/example-3');  // this is  the url. the baseUrl is configured in cypress.json

        cy.get('[data-cy="last-name-chars-left-count"]')
            .as('charsLeftSpan'); // this code serves as alias to designated attributes
        cy.get('[data-cy="input-last-name"]')
            .as('charInput'); // this code serves as alias to designated attributes
    });
    
    //First test validation 
    it('displays the appropriate remaining characters count', () => {
        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '15'); // first case validates if text is equal to the length of textbox

       // This is another way of coding which validates the value to be inputted in the textbox
       // cy.get('@charsLeftSpan')
       //   .then($charsLeftSpan => {
       //      expect($charsLeftSpan.text()).to.equal('15');
       //   });

        cy.get('@charInput').type('hello'); 

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '10'); // second case validates if text is equal to the length of textbox after inputting "hello"

        cy.get('@charInput').type(' my friend');

        cy.get('@charsLeftSpan')
            .invoke('text')
            .should('equal', '0'); // third case validates if text is equal to the length of textbox after inputting "hello my friend"
    });

    //Second test validation 
    it('prevents the user from typing more characters once max is exceeded', () => {
        cy.get('@charInput').type('abcdefghijklmnopqrstuvwxyz');

        cy.get('@charInput')
            .should('have.attr', 'value', 'abcdefghijklmno'); // fourth case validates that characters inputted exceed than expected textbox length
    });
});