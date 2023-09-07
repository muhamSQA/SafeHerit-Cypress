describe('Open Website, Login, and Fill Username and Password', () => {
  it('Visits the website, clicks Login, and fills username and password', () => {
    // Visit the website
    cy.visit('https://testing-safeherit.web.app/');

    // Wait for the Login button to be visible and clickable, then click it
    cy.get('#root > div > nav > button')
      .should('be.visible')
      .should('be.enabled')
      .click();

    // Wait for the username input field to be visible and type the username
    cy.get('input[name="username"]') // Replace with the actual selector for the username input field
      .should('be.visible')
      .type('gavril.isileli@fixedfor.com');

    // Wait for the password input field to be visible and type the password
    cy.get('input[name="password"]') // Replace with the actual selector for the password input field
      .should('be.visible')
      .type('Abc12345');

    cy.get('.primary-btn')
      .click();
    
    // You may want to add assertions or additional actions here
    
  });

  it('Uploads an image if possible', () => {
    cy.get('.opacity-0').then(($input) => {
      try {
        // Use a valid file path for your image
        cy.wrap($input).attachFile('C:\\Users\\MBF\\Desktop\\SafeHerit Cypress\\GettyImages-155113496-58b9c9033df78c353c37194e.jpg');
      } catch (error) {
        cy.log(`Error during image upload: ${error}`);
      }
    });
  });
});
