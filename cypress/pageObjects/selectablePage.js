import { BasePage } from "./basePage";

export class SelectablePage extends BasePage {
  static get gridButton() {
    return cy.get("#demo-tab-grid");
  }

  static get evenNumber() {
    return cy.get('[class="list-group-item list-group-item-action"]');
  }

  static get activeEvenNumber() {
    return cy.get('[class="list-group-item active list-group-item-action"]');
  }
}
