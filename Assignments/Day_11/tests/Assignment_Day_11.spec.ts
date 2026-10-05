import { test } from "playwright/test"
import { BasePage } from "../pages/base_page/Base_page" //Base page as center, contains Page
import dotenv from "dotenv";//inmporting dotenv
import { loginPage } from "../pages/login_page/login_page";//importing login page method
import { Leads_page } from "../pages/leads_page/Leads_basepage";
import { CreateLeadsPage } from "../pages/leads_page/Create_leadspage";
import { Accounts_page } from "../pages/accounts_page/Account_basepage";
//import { CreateAccountsPage } from "../pages/accounts_page/Create_account";


const filename = process.env.filename;//storing env_value as filename
dotenv.config({ path: `Data/${filename}.env` });//accesing env thorugh filename
//$env:filename="qa" is to assign the value to the filename
const BaseUrl: string = process.env.BaseUrl as string;
const Username: string = process.env.LF_Username as string;
const Password: string = process.env.LF_Password as string;

test("POM_Assignment_Day_11_CreateLead", async ({ page }) => {

    //object for BasePage
    const objBase = new BasePage(page)
    await objBase.LoadUrl(BaseUrl);

    //object for LoginPage
    const objLogin = new loginPage(page)
    await objLogin.Loginmethod(Username, Password);
    await objLogin.clickLogin();
    await objLogin.Welcomebutton();

    //object for leadspage
    const objLeads = new Leads_page(page)
    await objLeads.clickLeads();
    await objLeads.createLeads();

    //obje for createleadspage
    const objcreateLeads = new CreateLeadsPage(page)
    await objcreateLeads.fillLeaddetails("ABCD", "Bala", "Mukesh");
    await objcreateLeads.Dropdownvalues();
    await objcreateLeads.ClickCreateLead();

})

test.skip("Account_Creation", async ({ page }) => {

    //object for BasePage
    const objBase = new BasePage(page)
    await objBase.LoadUrl(BaseUrl);

    //object for LoginPage
    const objLogin = new loginPage(page)
    await objLogin.Loginmethod(Username, Password);
    await objLogin.clickLogin();
    await objLogin.Welcomebutton();

    //obj for Accountpage
    const objAccount = new Accounts_page(page)
    await objAccount.clickAccounts()
    await objAccount.createAccount()

    //obj for Accountfiling
    const objAccfill = new CreateAccountsPage(page)
    await objAccfill.fillAccountdetails();

}
)
