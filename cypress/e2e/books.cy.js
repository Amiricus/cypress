describe('Books tests', () => {
  context('HD resolution', () => {
    beforeEach(() => {
      cy.viewport(1366, 768)
    })

    it("Should open the main page", () => {
      cy.visit('/');
      cy.contains('Books list').should('be.visible');
    });

    it("Should successfully login", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.contains('Добро пожаловать test@test.com').should('be.visible');
    });

    it("Should not login with empty email", () => {
  cy.visit('/');
  cy.login(' ', 'test');
  cy.get('#mail')
    .then(($el) => $el[0].checkValidity())
    .should('be.false');
    });

    it("Should not login with empty password", () => {
  cy.visit('/');
  cy.login('test@test.com');
  cy.get('#pass')
    .then(($el) => $el[0].checkValidity())
    .should('be.false');
    });

    it("Should open the book", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.get('.card-body').click();
  cy.contains('Dowload book').should('be.visible');
    });

    it("Add the book to favorite", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.contains('Add to favorite').click();
  cy.contains('Delete from favorite').should('be.visible');
    });

    it("Delete the book from favorite", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.contains('Favorites').click();
  cy.contains('Delete from favorite').click();
  cy.contains('Please add some book to favorit on home page!').should('be.visible');
    });
  });

  context('iphone-xr resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr')
    })

    it("Should open the main page", () => {
      cy.visit('/');
      cy.contains('Books list').should('be.visible');
    });

    it("Should successfully login", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.contains('Добро пожаловать test@test.com').should('be.visible');
    });

    it("Should not login with empty email", () => {
  cy.visit('/');
  cy.login(' ', 'test');
  cy.get('#mail')
    .then(($el) => $el[0].checkValidity())
    .should('be.false');
    });

    it("Should not login with empty password", () => {
  cy.visit('/');
  cy.login('test@test.com');
  cy.get('#pass')
    .then(($el) => $el[0].checkValidity())
    .should('be.false');
    });

    it("Should open the book", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.get('.card-body').click();
  cy.contains('Dowload book').should('be.visible');
    });

    it("Add the book to favorite", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.contains('Add to favorite').click();
  cy.contains('Delete from favorite').should('be.visible');
    });

    it("Delete the book from favorite", () => {
  cy.visit('/');
  cy.login('test@test.com', 'test');
  cy.contains('Favorites').click();
  cy.contains('Delete from favorite').click();
  cy.contains('Please add some book to favorit on home page!').should('be.visible');
    });
  });
});    
