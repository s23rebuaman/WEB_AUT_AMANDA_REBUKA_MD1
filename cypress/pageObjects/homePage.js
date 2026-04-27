import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get interactionsCard() {
    return cy.get('[class="card mt-4 top-card"]').eq(4);
  }
}
