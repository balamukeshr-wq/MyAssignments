import { test, expect } from "@playwright/test";

test("Login PVR", async ({ page }) => {

    await page.goto("https://www.pvrcinemas.com/"); // url 

    await page.locator("//input[@placeholder='Search for city']").fill('Chennai'); // searching for city name in Search box

    await page.locator("//li[contains(text(),'Chennai')]").click(); //filling city name

    await page.waitForTimeout(2500); //wait for page to load

    //selection of movie    
    await page.getByRole('button', { name: 'Select Movie', exact: true }).click();

    await page.locator("//ul[@role='listbox']//span[text()='HANUMAN ANSH']").click();

    //selection of date
    await page.locator("//div[@id='date']").click();

    await page.getByRole('button', { name: 'Select Date', exact: true }).click();

    await page.locator("//ul[@role='listbox']//span[text()='Tomorrow']").click();

    await page.waitForTimeout(1000);

    //selection of theatre

    await page.locator("//div[@id='cinema']").click();

    await page.waitForTimeout(1000);

    await page.locator('li:has-text("INOX Luxe Phoenix Market City")').click();

    await page.waitForTimeout(1000);

    //selection of show timing

    await page.locator("//div[@id='time']").click();

    await page.locator('li:has-text("4:10 PM")').click();

    await page.getByRole('button', { name: 'Submit' }).click();

    await page.waitForTimeout(1000);

    ///accepting terms and condtions

    await page.locator("//button[text()='Accept']").click();

    await page.waitForTimeout(1000);

    //selection of ticket

    await page.locator("//span[@id='EL.ELITE|P:4']").click();

    await page.waitForTimeout(1000);

    await page.locator("//button[text()='Proceed']").click()

    //checking ticket and amount details

    await expect(page.locator('text=P4')).toBeVisible();

    await expect(page.locator('text=242.61')).toBeVisible();   // Grand Total
    //checking page details
    await expect(page).toHaveTitle(/PVR Cinemas/);
    
    await expect(page).toHaveURL(/pvrcinemas\.com/);

});
