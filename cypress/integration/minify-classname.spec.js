/// <reference types="cypress" />

describe('nextjs-plugin-minify-css-classname', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('correctly minifies css classnames.', () => {
    cy.get('#test-css').then((elements) => {
      cy.window().then((win) => {
        const color = win
          .getComputedStyle(elements[0])
          .getPropertyValue('color');
        expect(color).to.equal('rgb(255, 0, 0)');
      });
    });
  });

  it('correctly minifies scss classnames.', () => {
    cy.get('#test-scss').then((elements) => {
      cy.window().then((win) => {
        const color = win
          .getComputedStyle(elements[0])
          .getPropertyValue('background-color');
        expect(color).to.equal('rgb(0, 255, 0)');
      });
    });
  });

  it('correctly minifies sass classnames.', () => {
    cy.get('#test-sass').then((elements) => {
      cy.window().then((win) => {
        const color = win
          .getComputedStyle(elements[0])
          .getPropertyValue('background-color');
        expect(color).to.equal('rgb(0, 0, 255)');
      });
    });
  });
});
