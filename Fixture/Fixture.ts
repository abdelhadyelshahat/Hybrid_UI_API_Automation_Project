import {test as base }  from "@playwright/test";
import { FormPgae } from '../Pages/FormPage';
import AboutPage from '../Pages/AboutPage';


type PageTypes = {  
    formPage : FormPgae;
    aboutPage : AboutPage;
}

export const test = base.extend<PageTypes>({
    formPage: async ({ page }, use) => {
        const formPage = new FormPgae(page);
        await use(formPage);
    },
    aboutPage: async ({ page }, use) => {
        const aboutPage = new AboutPage(page);
        await use(aboutPage);
    }
});
export const expect = test.expect;
