/// <reference types="cypress" />

describe("Header Component", () => {
  beforeEach(() => {
    // Visit the root page before each test
    // While mobile width guard is in place, use a larger viewport
    cy.viewport(1280, 720);
    cy.visit("/");
  });

  it("should display the main logo and name", () => {
    // Check that the logo is visible
    cy.get(".nav__logo img")
      .should("have.attr", "src", "/src/resources/images/logo.png")
      .and("have.attr", "alt", "Fancy logo")
      .and("be.visible");

    // Check the header name image is visible
    cy.contains("darkpencil1 art vault");
  });

  it("should navigate to the correct pages when nav items are clicked", () => {
    // Loop through nav items and check navigation
    const navItems = [
      { name: "Catalog", href: "/catalog" },
      { name: "About", href: "/about" },
      { name: "Shop", href: "/shop" },
    ];

    navItems.forEach((item) => {
      cy.contains(item.name).click();
      cy.url().should("include", item.href);
      cy.go("back"); // Go back to the previous page
    });
  });

  it("should navigate to the home page when the logo is clicked", () => {
    // Click the main logo
    cy.visit(`${Cypress.config().baseUrl}/shop`);
    cy.get(".nav__logo").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("should render the CartIcon component", () => {
    // Check that the CartIcon is visible
    cy.get(".cart__icon").should("be.visible");
  });
});
