import { Context } from "vm";
import { Actions } from "../Utilties/Actions";
import { Assertions } from "../Utilties/Assertions"
import { Page } from "@playwright/test";

export default class BasePage
{
    page : Page

     actions : Actions ;
     assertions : Assertions ;


     constructor(page: Page)
     {
        this.page = page;
        this.actions = new Actions (this.page);
        this.assertions = new Assertions(this.page)

     }

    public async injectSessionIDInTheCookie(sessionID : string, context : Context)
     {
         if (sessionID) {
        await context.addCookies([{
            name: 'PHPSESSID',
            value: sessionID,
            domain: 'auto.aimtech.online',
            path: '/'
        }]);
    }
     }
}