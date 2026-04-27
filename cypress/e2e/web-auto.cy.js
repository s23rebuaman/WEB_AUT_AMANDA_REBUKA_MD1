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
      SelectablePage.numberBox.contains("Two").click();
      SelectablePage.numberBox.contains("Four").click();
      SelectablePage.numberBox.contains("Six").click();
      SelectablePage.numberBox.contains("Eight").click();
      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.activeEvenNumber.should('contain.text', 'Two');
      SelectablePage.activeEvenNumber.should('contain.text', 'Four');
      SelectablePage.activeEvenNumber.should('contain.text', 'Six');
      SelectablePage.activeEvenNumber.should('contain.text', 'Eight');
      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectablePage.numberBox.should('contain.text', 'One');
      SelectablePage.numberBox.should('contain.text', 'Three');
      SelectablePage.numberBox.should('contain.text', 'Five');
      SelectablePage.numberBox.should('contain.text', 'Seven');
      SelectablePage.numberBox.should('contain.text', 'Nine');
    });
  });
});
