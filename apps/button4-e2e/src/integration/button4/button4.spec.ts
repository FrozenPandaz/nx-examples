describe('button4: Button4 component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button4--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Button4!');
    });
});
