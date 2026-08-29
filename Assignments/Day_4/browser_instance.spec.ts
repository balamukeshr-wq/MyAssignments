import { test } from "@playwright/test";
import { chromium, firefox } from "playwright";

test(`Edge Launch for redbus`, async () => {
    // Create a browser instance
    const browser = await chromium.launch({ headless: false, channel: 'msedge' });
    // Create the browser context
    const context = await browser.newContext();
    //Creates new page
    const page = await context.newPage();
    //loads the target url
    await page.goto("https://www.redbus.in/");
    // get the title of the page
    console.log(`The title of the page is ${await page.title()}`);
    await page.waitForTimeout(5000);
    //closes the broeser
    await browser.close();
});

test(`Firefox Launch for Flipkart`, async () => {
    // Create a browser instance
    const browser = await firefox.launch({ headless: false });
    //create the browser context
    const context = await browser.newContext();
    //Creates new page
    const page = await context.newPage();
    //loads the target url
    await page.goto("https://www.flipkart.com/");
    //get the title of the page
    console.log(`The title of the page is ${await page.title()}`);
    await page.waitForTimeout(5000);
    //closes the bwoeser
    await browser.close();
});

