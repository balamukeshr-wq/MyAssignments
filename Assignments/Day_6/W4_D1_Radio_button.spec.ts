import { test, expect } from "@playwright/test";

test("Understanding Radio buttons", async ({ page }) => {
    //assertion for default values
    await page.goto("https://leafground.com/radio.xhtml");

    const def_radiobutton1 = page.getByRole('radio', { name: 'Safari' }).nth(1);

    await expect(def_radiobutton1).toBeChecked();

    await page.waitForTimeout(4000);

    const def_radiobutton2 = page.getByRole('radio', { name: '21-40 Years' });

    await expect(def_radiobutton2).toBeChecked();

    //selection of browser 
     const sel_browser = page.locator('//label[text()="Firefox"]').first();
     await sel_browser.click();
     await expect(sel_browser).toBeChecked();
    // //selection of city
    const sel_city = page.locator('//label[text()="Chennai"]');
    await sel_city.click();
    await expect(sel_city).toBeChecked();
    //selection of age-group
    const sel_agegrp = page.locator('//label[text()="41-60 Years"]');
    await sel_agegrp.click();
    await expect(sel_agegrp).toBeChecked();

})