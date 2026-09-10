import { test } from "@playwright/test";

test("W3school alert", async ({ page }) => {

    // Listen for JavaScript dialogs
    page.on("dialog", async (dialog) => {
        //prints dialog type and message
        console.log("Dialog type:", dialog.type());
        console.log("Dialog message:", dialog.message());
        //if its a confirm dialog, it will cancel,else it will accept
        if (dialog.type() === "confirm") {
            await dialog.dismiss();
        } else {
            await dialog.accept();
        }
    }
    )
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");//URL 
    const outerframe = page.frameLocator('#iframeResult');//finds the outerframe
    await outerframe.getByRole("button", { name: "Try it" }).click();//using outerframe , innerframe button is clicked

});
