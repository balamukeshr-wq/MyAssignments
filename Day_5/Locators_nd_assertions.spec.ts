
import { test, expect } from "@playwright/test";

test.use({ storageState: 'auth-state.json' });

test("Assignment Step 1_a: Create a Lead", async ({ page }) => {
    //logging in 
    await page.goto("http://leaftaps.com");
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator('a:has-text("CRM/SFA")').click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Create Lead")').click();
    //Filling the details
    await page.locator('#createLeadForm_companyName').fill("VJCS");
    await page.locator('#createLeadForm_firstName').fill("Balamukesh");
    await page.locator('#createLeadForm_lastName').fill("R");
    await page.locator('input[value="Create Lead"]').click();


    // Playwright waits for the page to load and change titles-auto wait
    await expect(page).toHaveTitle(/View Lead/);

    // Checks the static string variable immediately without waiting-non retry
    const pageTitle = await page.title();
    expect(pageTitle).toBe("View Lead | opentaps CRM");

    await page.close();
});


test("Assignment Step 1_b: Find an Existing Lead", async ({ page }) => {

    //logging in
    await page.goto("http://leaftaps.com");
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator('a:has-text("CRM/SFA")').click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Find Leads")').click();

    //waits for id to appear

    await expect(page.locator('input[name="id"]')).toBeVisible();

    //Find name
    await page.locator('div.x-form-item input[name="firstName"]').nth(2).fill("Balamukesh");

    //  Click the Find Leads execution button using a CSS class/text
    await page.locator('button:has-text("Find Leads")').click();

    //wait for results to get refreshed
    await page.waitForTimeout(3000);

    // Click the first link in the table to open the lead details

    await page.locator('a[href*="viewLead"]').first().click();


    //Verify that the page text matches your created First Name
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Balamukesh');

    // Optional: Verify that the page title contains "View Lead"
    await expect(page).toHaveTitle(/View Lead/);

    await page.close();
});

test("Assignment Step 2: Edit an Existing Lead", async ({ page }) => {

    await page.goto("http://leaftaps.com");
    await page.locator('#username').fill("Demosalesmanager");
    await page.locator('#password').fill("crmsfa");
    await page.locator('.decorativeSubmit').click();
    await page.locator('a:has-text("CRM/SFA")').click();
    await page.locator('a:has-text("Leads")').click();
    await page.locator('a:has-text("Find Leads")').click();

    //waits for id to appear

    await expect(page.locator('input[name="id"]')).toBeVisible();

    //Find name
    await page.locator('div.x-form-item input[name="firstName"]').nth(2).fill("Balamukesh");

    //  Click the Find Leads execution button using a CSS class/text
    await page.locator('button:has-text("Find Leads")').click();

    //wait for results to get refreshed
    await page.waitForTimeout(3000);

    // Click the first link in the table to open the lead details

    await page.locator('a[href*="viewLead"]').first().click();

    await page.locator('a[href*="updateLeadForm"]').click();
    //Edit Company name
    await page.locator('#updateLeadForm_companyName').fill("VJCS Updated Corp");
    //Edit Salary
    await page.locator('#updateLeadForm_annualRevenue').fill("850000");
    //Edit Department
    await page.locator('#updateLeadForm_departmentName').fill("QA Automation");
    //Enter Description
    await page.locator('#updateLeadForm_description').fill("This lead records details have been successfully modified via automation.");
    // Click Update
    await page.locator('input[value="Update"]').click();
    //Auto-wait assertions
    await expect(page.locator('#viewLead_companyName_sp')).toContainText("VJCS Updated Corp");
    await expect(page.locator('#viewLead_departmentName_sp')).toHaveText("QA Automation");
    await expect(page.locator('#viewLead_description_sp')).toHaveText("This lead records details have been successfully modified via automation.");
    //page close
    await page.close();
});


test ("Salesforce_Login_test", async ({ page }) => {

    // Open Salesforce using saved authentication state
    await page.goto(
        "https://orgfarm-515e3d49c6-dev-ed.develop.lightning.force.com"
    );

    // Verify Salesforce Home page
    await expect(page).toHaveURL(/.*lightning\/page\/home/);
    await expect(page).toHaveTitle(/Home \| Salesforce/);

    await expect(page).toHaveURL(/.*lightning\/page\/home/);
    await expect(page).toHaveTitle(/Home \| Salesforce/);

    // App Launcher - class locator
    await page.locator("div.slds-icon-waffle").click();

    await page.waitForTimeout(5000);//wait for page loading
        
    // Search - getByPlaceholder
    await page.getByPlaceholder("Search apps and items...", { exact: true }).fill('Service');

    // Service - index based XPath
    await page.locator("(//one-app-launcher-menu-item)[1]//a").click();

    // Accounts - attribute based CSS
    await page.locator('a[title="Accounts"]').click();

    // New - getByRole
    await page.getByRole("button", { name: "New", exact: true }).click();

    // Account name - attribute based CSS
    await page.locator('input[name="Name"]').fill("R.Balamukesh");

    // Save - XPath
    await page.locator('//button[@name="SaveEdit" and text()="Save"]').click();

    // Verify toast
    const toastMessage = page.locator("span.toastMessage");

    await expect(toastMessage).toBeVisible();
    await expect(toastMessage).toContainText("was created");
});
