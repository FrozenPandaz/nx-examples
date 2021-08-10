describe('button3: Button3 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button3--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Button3!');
    });
});
