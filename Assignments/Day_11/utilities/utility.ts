
import { BasePage } from "../pages/base_page/Base_page";



export class UtiltyWrapper extends BasePage {

    

    async fillandtab(locator: string, data: string) {

        await this.page.locator(locator).fill(data);

        await this.page.locator(locator).press("Tab");
    }
}