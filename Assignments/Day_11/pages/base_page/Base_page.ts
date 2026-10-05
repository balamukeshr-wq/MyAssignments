import { Page } from "playwright";

export class BasePage {
     page: Page

     constructor(localpage: Page) {
         this.page = localpage
     }

    async LoadUrl(url:string){
        await this.page.goto(url);
    }

}