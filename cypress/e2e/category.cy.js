describe('Category Page Tests', () => {
  beforeEach(() => {
    // Navega até a página inicial antes de cada teste
    cy.visit('/');
  });

  it('Navigates to a category and displays products', () => {
    // Clica no link para uma categoria (ajuste o seletor conforme necessário)
    cy.get('[data-testid="category-link"]').first().click();

    // Verifica que a URL mudou para a categoria correspondente
    cy.url().should('include', '/category/');

    // Verifica se os produtos da categoria estão sendo exibidos
    cy.get('[data-testid="product-card"]').should('have.length.greaterThan', 0);
  });

  it('Displays "No products available" for an empty category', () => {
    // Acesse diretamente uma categoria vazia
    cy.visit('/category/empty');

    // Verifica se a mensagem de "sem produtos" é exibida
    cy.contains('No products available.').should('be.visible');
  });
});
