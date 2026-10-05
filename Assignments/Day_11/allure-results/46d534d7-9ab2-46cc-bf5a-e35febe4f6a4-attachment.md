# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Assignment_Day_11.spec.ts >> POM_Assignment_Day_11
- Location: tests\Assignment_Day_11.spec.ts:14:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('//div[@class="crmsfa"]')

```

# Test source

```ts
  1  | 
  2  | import { UtiltyWrapper } from "../../utilities/utility";
  3  | 
  4  | export class loginPage extends UtiltyWrapper {
  5  | 
  6  | 
  7  |     async Loginmethod(username: string, password: string) {
  8  |         await this.fillandtab(`//input[@id="username"]`, username);
  9  |         await this.fillandtab(`//input[@id="password"]`, password);
  10 |     }
  11 |     async clickLogin() {
  12 |         await this.page.locator('//input[@class="decorativeSubmit"]').click();
  13 | 
  14 |     }
  15 |     async Welcomebutton() {
> 16 |         await this.page.locator(`//div[@class="crmsfa"]`).click();
     |                                                           ^ Error: locator.click: Target page, context or browser has been closed
  17 |     }
  18 | }
```