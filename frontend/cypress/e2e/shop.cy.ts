/// <reference types="cypress" />
import mockProducts from "../fixtures/mockProducts";

describe("Shop Page", () => {
  beforeEach(() => {
    // While mobile width guard is in place, use a larger viewport
    cy.viewport(1280, 720);

    cy.intercept("GET", "/api/product", {
      statusCode: 200,
      body: mockProducts,
    }).as("getProducts");
    cy.visit("/shop");
  });

  it("should load the banner", () => {
    cy.get(".banner__text-container").should("be.visible");
  });

  it("should intercept /api/product and return mock data", () => {
    cy.wait("@getProducts").its("response.body").should("have.length", 3);

    mockProducts.forEach((product) => {
      cy.contains(product.name).should("be.visible");
      cy.contains(product.snapshot).should("be.visible");
    });
  });

  it("Clicking product btn changes url correctly", () => {
    cy.wait("@getProducts").its("response.body").should("have.length", 3);
    cy.get(".product__wrapper").get(".product__cta").first().click();
    cy.url().should("eq", "http://localhost:3000/product?id=1");
  });
});
