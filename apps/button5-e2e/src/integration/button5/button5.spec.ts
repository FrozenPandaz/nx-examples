describe('button5: Button5 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button5--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Button5!');
    });
});
