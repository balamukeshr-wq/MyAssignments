
import { UtiltyWrapper } from "../../utilities/utility";

export class loginPage extends UtiltyWrapper {


    async Loginmethod(username: string, password: string) {
        await this.fillandtab(`//input[@id="username"]`, username);
        await this.fillandtab(`//input[@id="password"]`, password);
    }
    async clickLogin() {
        await this.page.locator('//input[@class="decorativeSubmit"]').click();

    }
    async Welcomebutton() {
        await this.page.locator(`//div[@class="crmsfa"]`).click();
    }
}