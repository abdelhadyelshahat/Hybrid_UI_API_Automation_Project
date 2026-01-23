import { test, expect } from '../Fixture/Fixture';
import { Context, request } from '@playwright/test';
import AboutPage from '../Pages/AboutPage';
import { FormPgae } from '../Pages/FormPage';
import WebsiteDate from '../TestData/WebsiteData.json'

let URLForLogin: string = WebsiteDate.URLForLogin


let apiGlobalResponse;

let URLForUiTest: string = WebsiteDate.URLForUiTest;
let sessionID : string = "";

test.describe.configure({ mode: 'serial' });
test("Login Api", async ({ request }) => {
    // we here send el request bestkhdam el post request, this api user el old fashiom Html form 
    // so we use form attribute not data 
    let apiResponse = await request.post(URLForLogin, {
        form: WebsiteDate.LoginData,
        maxRedirects: 0
    })
    console.log(apiResponse)

    // I found that this api rederict the page to the page called dashboard, but we will not use it 
    expect(apiResponse.status()).toBe(302)

    // I will sace the response, but I think I will not use it any more, I will just extract the session ID from the cookie 
    apiGlobalResponse = apiResponse;

    const headers = apiResponse.headers()

    console.log("---------------------------------------------")
    console.log(headers['set-cookie'])
    let cookie = headers['set-cookie']

    // Here ana b3mel split for hte value of the cookie, beacuse it contains the session ID 
    // split at ; and take the first part (before ;) by [0], againg split at = and take the part after it by using [1]
    sessionID = cookie.split(';')[0].split('=')[1];
    console.log(sessionID)

})


test('Go to the UI testing website ', async ({ page, context, aboutPage }) => {

    await aboutPage.injectSessionIDInTheCookie(sessionID,context)

    // await page.goto(URLForUiTest)
    await aboutPage.actions.goToPage(URLForUiTest)
})

test('About Page', async ({page , context, aboutPage}) => 
{
    await aboutPage.injectSessionIDInTheCookie(sessionID,context)

    await aboutPage.goToAboutPage();

    await aboutPage.assertAboutHeaderText();


})


test("Forms Page - Happy Scenario", async ({page, context, formPage })=>{

   await formPage.injectSessionIDInTheCookie(sessionID,context)

//    Go to the page and just click on t
    await formPage.goToFromsPage()
    await formPage.enterUsernameText("aimtech")
    await formPage.enterEmailText("abdelhadyeslshahat@gamil.com")
    await formPage.enterPasswordText("AIM@auto123")
    await formPage.PressSingInBtn()


    // Assertions 
    await formPage.assertLoginBtnToBeDisabled()
    await formPage.assertLoginBtnToBeDisabled()


})

test("Forms Page - Negative Scenario", async ({page, context, formPage })=>{

   await formPage.injectSessionIDInTheCookie(sessionID,context)

    await formPage.goToFromsPage()
    await formPage.enterUsernameText("")
    await formPage.enterEmailText("")
    await formPage.enterPasswordText("")
    await formPage.PressSingInBtn()
 

    // Assertions 
   await formPage.asserstOnUsernameFieldisEmpty()
    await formPage.asserstOnEmailFieldisEmpty()
    await formPage.asserstOnpasswordFieldisEmpty()
})

test("Forms Page - Empty Username", async ({page, context, formPage })=>{

   await formPage.injectSessionIDInTheCookie(sessionID,context)

    await formPage.goToFromsPage()
    await formPage.enterUsernameText("")
    await formPage.enterEmailText("hady@gmail.com")
    await formPage.enterPasswordText("AIM@auto123") 
    await formPage.PressSingInBtn()
 

    // Assertions 
   await formPage.asserstOnUsernameFieldisEmpty()

})


test("Forms Page - Empty email", async ({page, context, formPage })=>{

   await formPage.injectSessionIDInTheCookie(sessionID,context)

    await formPage.goToFromsPage()
    await formPage.enterUsernameText("aimtech")
    await formPage.enterEmailText("")
    await formPage.enterPasswordText("AIM@auto123") 
    await formPage.PressSingInBtn()
 

    // Assertions 
   await formPage.asserstOnEmailFieldisEmpty()

})

test("Forms Page - Empty Password", async ({page, context, formPage })=>{

   await formPage.injectSessionIDInTheCookie(sessionID,context)

    await formPage.goToFromsPage()
    await formPage.enterUsernameText("aimtech")
    await formPage.enterEmailText("abdelhady@gmail.com")
    await formPage.enterPasswordText("") 
    await formPage.PressSingInBtn()
 

    // Assertions 
   await formPage.asserstOnpasswordFieldisEmpty()

})

test("Forms Page - Password is less than six characters ", async ({page, context, formPage })=>{

   await formPage.injectSessionIDInTheCookie(sessionID,context)

    await formPage.goToFromsPage()
    await formPage.enterUsernameText("aimtech")
    await formPage.enterEmailText("abdelhady@gmail.com")
    await formPage.enterPasswordText("AIM") 
    await formPage.PressSingInBtn()
 

    // Assertions 
   await formPage.asserstOnpasswordFieldisLessThanSixCharacters()

})


