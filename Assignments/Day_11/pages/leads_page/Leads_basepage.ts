import { BasePage } from "../base_page/Base_page";

export class Leads_page extends BasePage {

    async clickLeads() {
        await this.page.locator(`//a[text()="Leads"]`).click();
    }
    async createLeads(){
        await this.page.locator(`//a[text()="Create Lead"]`).click();
    }

}