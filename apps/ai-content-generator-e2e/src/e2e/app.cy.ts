import { getGreeting } from '../support/app.po';

describe('ai-content-generator-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(
      'Brows tons of categories such as Youtube tag generator and Blog article writer'
    );
  });
});
