import { HomePage } from "../pageObjects/HomePage";
import { InteractionsPage } from "../pageObjects/interactionsPage";

describe("demoqa scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit("https://demoqa.com");
    });

    it("Category", () => {
      // Click Interactions card
      HomePage.interactionsCard.click();
      // Click Selectable option
      InteractionsPage.selectableOption.click();
    });
  });
});
