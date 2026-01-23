import { expect, Page , Locator} from "@playwright/test";

export class Assertions 
{
    page : Page


    constructor (page : Page)
    {
        this.page = page
    }


    async AssertOnText(locator :Locator , text : string)
    {
        await expect(locator).toHaveText(text)
    }

}