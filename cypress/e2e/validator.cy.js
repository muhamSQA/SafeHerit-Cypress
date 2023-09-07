describe('Adding Validator', () => {
    it('should log in and log out', () => {
      // Set the viewport to a laptop screen size
      cy.viewport('macbook-15');
      // Visit the website's login page
      cy.visit('https://testing-safeherit.web.app/login');
      // Input email and password
      cy.get(':nth-child(1) > .text-safe-text-black > .bg-safe-white').type('aj70095@gmail.com');
      cy.get(':nth-child(2) > .text-safe-text-black > .bg-safe-white').type('12121212');
      // Click the login button
      cy.get('.primary-btn').click();
      cy.wait(3000);
      // Click on the specified element
      cy.get('.basis-2\\/5 .primary-btn').click();
      cy.wait(3000);
      // Click on the specified element
      cy.get(':nth-child(4) > .px-auto').click();
      // Attempt to click the first button and continue if not found
      cy.get('.grid').then(($grid) => {
        if ($grid.length > 0) {
          // If '.grid' is found, click on '.justify-between > .cursor-pointer'
          cy.get('.justify-between > .cursor-pointer').click();
        } else {
          // Handle the absence of '.grid' (if needed)
        }
      });
      // Adding validator
   // Function to generate a random string of a given length
  function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  // Generate random data
  const randomName = generateRandomString(5); // Adjust the length as needed
  const randomEmail = `test-${randomName}@example.com`;
  const randomNumber = Math.floor(Math.random() * 1000000000000); // Adjust the range as needed
  const fields = [
    randomName,
    randomEmail,
    randomEmail,
    randomEmail,
    randomNumber.toString(),
    randomNumber.toString(),
    randomNumber.toString(),
  ];
  // Type the generated data into the fields
  for (let i = 4; i <= 9; i++) {
    cy.get(`:nth-child(${i}) > .rounded-3xl`).type(fields[i - 4]);
  }
      cy.wait(1000);
      cy.get('._buttonStyle_1kpr8_49').click();
      cy.wait(1000);
      const url = 'http://facebook.com/login';
      for (let i = 4; i <= 6; i++) {
        cy.get(`:nth-child(${i}) > .rounded-3xl`).type(url);
      }
      cy.wait(1000);
      cy.get('._buttonStyle_1kpr8_49').click();
      cy.wait(1000);
      function generateRandomText(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
        return result;
      }
      // Generate random text and type it into the element
      const randomText = generateRandomText(10);
      cy.get('.bg-\\[\\#F5FAFD\\]').type(randomText);
      cy.get('._buttonStyle_1kpr8_49').click();
      cy.wait(6000); // Wait for the element to appear (adjust the time as needed)
      cy.contains('You successfully registered a new validator', { timeout: 10000 }).should('exist').then(() => {
        // Perform the desired action here
        cy.get('._icon_1kpr8_37 > .cursor-pointer').click();
      });
    });
  });