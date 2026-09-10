import { test as setup, expect } from '@playwright/test';

setup('Authenticate Salesforce Session', async ({ page }) => {
    // 1. Go to your login page
    await page.goto("https://login.salesforce.com/");

    // 2. Type your username
    await page.getByLabel("Username", { exact: true }).fill("balamukesh.r.aa7fb24f7c8a@agentforce.com");
    await page.getByRole("button", { name: "Log In" }).click();

    // 3. Type your password
    await page.getByLabel("Password", { exact: true }).waitFor({ state: 'visible' });
    await page.getByLabel("Password", { exact: true }).fill("Dt01ec@01");
    await page.getByRole("button", { name: "Log In" }).click();

    await page.pause();

    // 2. CRITICAL: Wait for a visible element inside the actual dashboard interface 
    // This guarantees that the internal lightning session cookies are completely loaded!
    const appLauncher = page.locator('div.slds-icon-waffle');
    await expect(appLauncher).toBeVisible({ timeout: 20000 });

    // This goes right after: await expect(appLauncher).toBeVisible();

    // Extract the fresh cookies from the active authenticated context
    const freshCookies = await page.context().cookies();
    const sidCookie = freshCookies.find(c => c.name === 'sid');

    if (sidCookie) {
        const domain = "orgfarm-515e3d49c6-dev-ed.develop.my.salesforce.com";
        const token = sidCookie.value;

        // Construct a fresh, one-time auto-login bypass link
        const freshBypassUrl = `https://${domain}/secur/frontdoor.jsp?sid=${token}`;
        console.log("👉 FRESH AUTO-LOGIN URL:", freshBypassUrl);
    }



    // 4. Save state (This will now fully capture the lightning.force.com 'sid' cookie!)
    await page.context().storageState({ path: 'playwright/.auth/user.json' });
});
