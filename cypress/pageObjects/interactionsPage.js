import { BasePage } from "./basePage";

export class InteractionsPage extends BasePage{

    static get selectableOption() {
        return cy.get('[class="element-group"]').eq(4).find('#item-1');
    }
}