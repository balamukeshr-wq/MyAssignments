import { expect, test } from "@playwright/test"

test('Interaction with checkbox', async ({ page }) => {

    await page.goto("https://leafground.com/checkbox.xhtml");

    await (expect(page.locator("//span[@class='ui-chkbox-label' and text()='Basic']"))).toBeVisible();//expects to be visible

    await page.locator("//span[@class='ui-chkbox-label' and text()='Basic']").click();//if visible click happens

    await (expect(page.locator("//span[@class='ui-chkbox-label' and text()='Ajax']"))).toBeVisible();//expect to be visible

    await page.locator("//span[@class='ui-chkbox-label' and text()='Ajax']").click();//if visible click happens

    await expect(page.locator("//span[@class='ui-growl-title' and text()='Checked']")).toBeVisible();//Checeked status assertion

    await page.locator("//label[text()='Javascript']").click();// Javascript is taken
    // storing tristate locator
    const checkboxContainer = page.locator('//div[contains(@id, "ajaxTriState")]');

    await checkboxContainer.click();
    // first checkbox 
    const checkedIcon_1 = checkboxContainer.locator("span.ui-icon-check");

    await checkboxContainer.click();
    //2dn checkbox with closethick
    const checkedIcon_2 = checkboxContainer.locator("span.ui-icon-closethick");

    await page.locator("//div[@class='ui-toggleswitch-slider']").click();//toggle switch click

    await expect(page.locator('//div[contains(@class, "ui-toggleswitch-checked")]')).toBeVisible();

    await expect(page.locator("//div[contains(@class, 'ui-state-disabled')]")).toBeVisible();//checking if checkbox is disabled

    await page.locator('//ul[@data-label="Cities"]').click();//locating cities dropdown menu
    
    //clicking cities
    await page.locator('//li[@data-item-value="Paris"]').click();
    await page.locator('//li[@data-item-value="Brasilia"]').click();
    await page.locator('//li[@data-item-value="Rome"]').click();

    await page.close();

})
