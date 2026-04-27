import { HomePage } from "../pageObjects/HomePage";
import { InteractionsPage } from "../pageObjects/interactionsPage";
import { SelectablePage } from "../pageObjects/selectablePage";

describe("demoqa scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
    });

    it("Category", () => {
      // Click Interactions card
      HomePage.interactionsCard.click();
      // Click Selectable option
      InteractionsPage.selectableOption.click();
      // Click Grid button
      SelectablePage.gridButton.click();
      // Click - “Two”, “Four”, “Six”, “Eight”
      SelectablePage.evenNumber.contains("Two").click();
      SelectablePage.evenNumber.contains("Four").click();
      SelectablePage.evenNumber.contains("Six").click();
      SelectablePage.evenNumber.contains("Eight").click();
      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.activeEvenNumber.should('contain.text', 'Two');
      SelectablePage.activeEvenNumber.should('contain.text', 'Four');
      SelectablePage.activeEvenNumber.should('contain.text', 'Six');
      SelectablePage.activeEvenNumber.should('contain.text', 'Eight');
    });
  });
});
