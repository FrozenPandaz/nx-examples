describe('shared-button: SharedButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=sharedbutton--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to SharedButton!');
    });
});
