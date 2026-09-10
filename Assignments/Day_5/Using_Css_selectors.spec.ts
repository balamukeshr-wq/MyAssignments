import { test, expect } from "@playwright/test";


test("Assignment_Create a Lead using CSS", async ({ page }) => {
     //page setup
    //Goes to the specified URL
    await page.goto("http://leaftaps.com/opentaps/control/main");

    // Logging in process
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
   // Steps for Create Lead
    await page.locator('text=CRM/SFA').click();
    await page.locator('a:has-text("Create Lead")').click();

    // Fill form fields using CSS ID selectors
    await page.locator('#createLeadForm_companyName').fill("VJCS");
    await page.locator('#createLeadForm_firstName').fill("Balamukesh");
    await page.locator('#createLeadForm_lastName').fill("R");
    await page.locator('#createLeadForm_personalTitle').fill("Mr");
    await page.locator('#createLeadForm_generalProfTitle').fill("Automation Engineer"); 
    await page.locator('#createLeadForm_annualRevenue').fill("700000");
    await page.locator('#createLeadForm_departmentName').fill("ITES");
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9840147603");

    // Click Create Lead button using CSS 
    await page.locator('input[value="Create Lead"]').click();

    // Get and assert the page title
    const pageTitle = await page.title();
    console.log(`The final page title is: ${pageTitle}`);

    // Verification check to make sure it saved successfully
    await expect(page).toHaveTitle(/View Lead/);
 
    //manual close of the page
    await(page).close();
});