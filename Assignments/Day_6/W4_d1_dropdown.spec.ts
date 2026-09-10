import { test } from "@playwright/test"

test("Understanding Dropdowns", async ({ page }) => {

    await page.goto('https://leafground.com/select.xhtml');

    //storing dropdown values and printing it 

    const dropdown_values = page.locator('//select[@class="ui-selectonemenu"]/option');

    const dropdown_text = await dropdown_values.allTextContents();

    console.log(`the number of dropdown value is ${dropdown_text.length}`);

    for (let i = 0; i < dropdown_text.length; i++) {
        console.log(`the texts of dropdown are, ${dropdown_text[i]}`);
    }
    //clicking playwright from dropdown
    await page.locator('//select[@class="ui-selectonemenu"]').selectOption({ label: 'Playwright' });
    //selecting country
    await page.locator('//label[text()="Select Country"]').click();

    await page.getByRole('option', { name: 'India' }).click();
    //selecting City
    await page.locator('//label[text()="Select City"]').click();

    await page.locator('//li[text()="Chennai"]').click();
    //selecting Courses
    const course_Dropdown = page.getByRole('button', { name: 'Show Options' });

    await course_Dropdown.click();

    await page.getByRole('option', { name: 'Playwright' }).nth(1).click();

    await page.waitForTimeout(2000);

    await course_Dropdown.click();

    await page.getByRole('option', { name: 'RestAssured' }).click();

    await page.waitForTimeout(2000);

    await course_Dropdown.click();

    await page.getByRole('option', { name: 'Selenium WebDriver' }).click();
    //Selecting Language
    await page.locator(`//label[text()='Select Language']`).click();

    await page.locator(`//li[text()='Malayalam']`).click();
    //selecting 2 based on index
    await page.locator('label.ui-selectonemenu-label').filter({ hasText: 'Select Values' }).click();

    await page.locator('.ui-selectonemenu-panel:visible .ui-selectonemenu-item').nth(2).click();


})