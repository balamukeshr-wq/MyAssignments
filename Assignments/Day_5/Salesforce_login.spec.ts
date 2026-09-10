import { test, chromium, expect } from '@playwright/test';

test('Manual Browser Launch', async () => {
    // Launch Chromium in non-headless (headed) mode
    const browser = await chromium.launch({ headless: false, });

    // Create a clean, isolated browser context
    const context = await browser.newContext();

    //Open a new page/tab within that context
    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");

    // Type your username
    await page.getByLabel("Username", { exact: true }).fill("balamukesh.r.aa7fb24f7c8a@agentforce.com");
    await page.getByRole("button", { name: "Log In" }).click();

    // Type your password
    await page.getByLabel("Password", { exact: true }).waitFor({ state: 'visible' });
    await page.getByLabel("Password", { exact: true }).fill("Dt01ec@01");
    await page.getByRole("button", { name: "Log In" }).click();
    await page.pause();//should have used 10000 , but page getting timed out so used pause.
    await page.locator('div.slds-icon-waffle').waitFor({ state: 'visible', timeout: 15000 });
    

    //assertion for page title and URL
    await expect(page).toHaveURL(/.*lightning/);
    await expect(page).toHaveTitle("Lightning Experience");
    //Closing the browser
    await browser.close();
});

