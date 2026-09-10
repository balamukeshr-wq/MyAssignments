
import { test, expect } from "@playwright/test"

test("Salesforce_Login_test-Create Lead", async ({ page }) => {


    //await page.goto("https://login.salesforce.com");

    // 2. Type your username
    //await page.getByLabel("Username", { exact: true }).fill("balamukesh.r.aa7fb24f7c8a@agentforce.com");
    //await page.getByRole("button", { name: "Log In" }).click();

    // 3. Type your password
    //await page.getByLabel("Password", { exact: true }).waitFor({ state: 'visible' });
    //await page.getByLabel("Password", { exact: true }).fill("Dt01ec@01");
    //await page.getByRole("button", { name: "Log In" }).click();
    //await page.waitForTimeout(30000);

    await page.goto("https://orgfarm-515e3d49c6-dev-ed.develop.my.salesforce.com/secur/frontdoor.jsp?sid=00Dfj00000e7sEL!AQEAQAYE5kWYQjucUWde9sOZrq7WKV71Up2N3rnTjxanb2HpqrVTdkywRgr5M9hlWeu5c2BrtiS0S2EESi2bwrVa_l.Db5xC");

    await page.waitForTimeout(3500);
    // App Launcher - class locator
    await page.locator("div.slds-icon-waffle").click();

    await page.waitForTimeout(5000);//wait for page loading

    // Search - getByPlaceholder
    await page.getByPlaceholder("Search apps and items...", { exact: true }).fill('Leads');

    await page.getByText("Leads", { exact: true }).click();

    await page.getByRole('button', { name: 'New' }).click();

    await page.getByRole('combobox', { name: 'Salutation' }).click();

    await page.getByRole('option', { name: 'Mr.' }).click();

    await page.getByPlaceholder('Last Name', { exact: true }).fill('Mukesh');

    await page.locator('input[name="Company"]').fill("Testleaf_practice");

    await page.getByRole('button', { name: 'Save', exact: true }).click();

    await page.waitForTimeout(5000);

    await expect(page.locator('//lightning-formatted-name[@slot="primaryField"]')).toHaveText('Mr. Mukesh');

    await expect(page.locator('//p[@title="Company"]/following-sibling::p//lightning-formatted-text')).toHaveText("Testleaf_practice");

});

test("Salesforce_Login_test-Edit Lead", async ({ page }) => {

    await page.goto("https://orgfarm-515e3d49c6-dev-ed.develop.my.salesforce.com/secur/frontdoor.jsp?sid=00Dfj00000e7sEL!AQEAQAYE5kWYQjucUWde9sOZrq7WKV71Up2N3rnTjxanb2HpqrVTdkywRgr5M9hlWeu5c2BrtiS0S2EESi2bwrVa_l.Db5xC");

    await page.waitForTimeout(4000);

    await page.locator("div.slds-icon-waffle").click();

    await page.waitForTimeout(4000);//wait for page loading

    await page.getByPlaceholder("Search apps and items...", { exact: true }).fill('Leads');

    await page.getByText("Leads", { exact: true }).click();

    await page.getByText('Mukesh', { exact: true }).first().click();

    await page.getByText('Show more actions', { exact: true }).click();

    await page.getByText('Edit', { exact: true }).click();

    await page.locator('input[name="Company"]').fill("Testleaf_practice_updated");

    await page.getByRole('button', { name: 'Save', exact: true }).click();

    await page.waitForTimeout(5000);

    await expect(page.locator('//p[@title="Company"]/following-sibling::p//lightning-formatted-text')).toHaveText("Testleaf_practice_updated");


});

test("Salesforce_Individual_creation", async ({ page }) => {

    await page.goto("https://orgfarm-515e3d49c6-dev-ed.develop.my.salesforce.com/secur/frontdoor.jsp?sid=00Dfj00000e7sEL!AQEAQAYE5kWYQjucUWde9sOZrq7WKV71Up2N3rnTjxanb2HpqrVTdkywRgr5M9hlWeu5c2BrtiS0S2EESi2bwrVa_l.Db5xC");
    await page.waitForTimeout(4000);

    await page.locator("div.slds-icon-waffle").click();

    await page.waitForTimeout(4000);

    await page.getByPlaceholder("Search apps and items...", { exact: true }).fill('Individuals');

    await page.getByText("Individuals", { exact: true }).click();

    await page.getByText('New', { exact: true }).click();

    await page.getByText('Last Name', { exact: true }).fill("Mukesh.R");

    await page.getByRole('button', { name: 'Save', exact: true }).click();

    await page.waitForTimeout(5000);

});

test.only("Editing Individduals", async ({ page }) => {

    await page.goto("https://orgfarm-515e3d49c6-dev-ed.develop.my.salesforce.com/secur/frontdoor.jsp?sid=00Dfj00000e7sEL!AQEAQAYE5kWYQjucUWde9sOZrq7WKV71Up2N3rnTjxanb2HpqrVTdkywRgr5M9hlWeu5c2BrtiS0S2EESi2bwrVa_l.Db5xC");

    await page.waitForTimeout(4000);

    await page.locator("div.slds-icon-waffle").click();

    await page.waitForTimeout(4000);

    await page.getByPlaceholder("Search apps and items...", { exact: true }).fill('Individuals');

    await page.getByText("Individuals", { exact: true }).click();

    await page.waitForTimeout(4000);

    await page.getByRole('link', { name: 'Mukesh.R', exact: true }).first().click();

    await page.waitForTimeout(4000);

    await page.getByRole('button', { name: 'Edit' }).click();

    await page.getByRole('button', { name: "Salutation --None--" }).click();

    await page.getByText('Mr.', { exact: true }).click();
    // // 1. Click the Salutation link container using text proximity
    // await page.locator('span:has-text("Salutation") + div a').click();

    // // 2. Click the 'Mr.' option from the popup list container
    // await page.locator('div.uiMenuList a[title="Mr."]').click();

    await page.getByRole('textbox', { name: 'First Name' }).fill('Bala');

    await page.waitForTimeout(4000);

    await page.getByRole('button', { name: 'Save', exact: true }).click();

    await page.waitForTimeout(4000);

    await expect(page.getByText('Mr. Bala Mukesh.R')).toBeVisible();



})

