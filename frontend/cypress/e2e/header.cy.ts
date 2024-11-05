/// <reference types="cypress" />

describe("Header Component", () => {
  beforeEach(() => {
    // Visit the root page before each test
    cy.visit("/");
  });

  it("should display the main logo and name logo", () => {
    // Check that the logo is visible
    cy.get(".nav__logo img")
      .should("have.attr", "src", "/src/resources/images/logo.png")
      .and("have.attr", "alt", "Ville's Art Cave")
      .and("be.visible");

    // Check the header name image is visible
    cy.get(".header__logo-name")
      .should("have.attr", "src", "/src/resources/images/herequest.png")
      .and("be.visible");
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
    cy.get(".nav__logo").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("should render the CartIcon component", () => {
    // Check that the CartIcon is visible
    cy.get("svg").should("be.visible");
  });
});
