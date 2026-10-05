import { UtiltyWrapper } from "../../utilities/utility";

export class CreateLeadsPage extends UtiltyWrapper {

    async fillLeaddetails(companyName: string, firstName: string, lastName: string) {
        await this.fillandtab('//input[@id="createLeadForm_companyName"]', companyName);
        await this.fillandtab(`//input[@id="createLeadForm_firstName"]`, firstName);
        await this.fillandtab(`//input[@id="createLeadForm_lastName"]`, lastName);
    }

    async Dropdownvalues() {

        //await this.page.locator(`//select[@id="createLeadForm_dataSourceId"]`).click();
        await this.page.locator(`//select[@id="createLeadForm_dataSourceId"]`).selectOption("LEAD_DIRECTMAIL");

        //await this.page.locator(`//select[@id="createLeadForm_marketingCampaignId"]`).click();
        await this.page.locator(`//select[@id="createLeadForm_marketingCampaignId"]`).selectOption("Demo Marketing Campaign");

        const dropdowncount = await this.page.locator(`//select[@id="createLeadForm_marketingCampaignId"]/option`).allInnerTexts();
        for (const optionText of dropdowncount) {
            console.log("Option:", optionText);
        }
        // for (let i = 0; i < dropdowncount; i++) {
        //     let dropDownValues = await this.page.locator('//select[@id="createLeadForm_marketingCampaignId"]/option').nth(i).allInnerTexts();
        //     console.log(dropDownValues);

        // }

        await this.page.locator(`//select[@id="createLeadForm_industryEnumId"]`).selectOption({ label: "General Services" });

        await this.page.locator(`//select[@id="createLeadForm_currencyUomId"]`).selectOption({ value: "INR" });
        //await this.page.locator(`//select[@id="createLeadForm_currencyUomId"]/option[@value="INR"]`).click();

        //await this.page.locator(`//select[@id="createLeadForm_generalCountryGeoId"]`).click();
        await this.page.locator(`//select[@id="createLeadForm_generalCountryGeoId"]`).selectOption({ value: "IND" });

        // //await this.page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`).click();
        await this.page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]`).selectOption({ label: "TAMILNADU" });

        const statecount = await this.page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`).allTextContents();
        // for (let i = 0; i < statecount; i++) {
        //     let dropDownValues = await this.page.locator(`//select[@id="createLeadForm_generalStateProvinceGeoId"]/option`).nth(i).allInnerTexts();
        //     console.log(dropDownValues);

        // }
        for (const optionText of statecount) {
            console.log("States:", optionText);
        }

    }
    async ClickCreateLead() {
        await this.page.locator(`//input[@value="Create Lead"]`).click();
    }

}