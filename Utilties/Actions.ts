import { Locator, Page } from "@playwright/test";
import test from "node:test";

export class Actions {

    page : Page ;


    constructor(page :Page )
    {
        this.page = page
    }

    async goToPage(url : string )
    {
        await this.page.goto(url)
    }


    async clickOnElement(locator :Locator)
    {
        await locator.click();

    }

    async EnterText(locator : Locator, text : string)
    {
        await locator.fill(text)
    }

}
