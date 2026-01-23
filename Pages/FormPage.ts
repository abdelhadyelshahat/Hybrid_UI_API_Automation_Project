import { expect, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export class FormPgae extends BasePage
{
    // Locators 
    usernaemeLocator : Locator = this.page.locator('#username')
    emailLocator : Locator = this.page.locator(`#email`)
    passwordLocator :Locator = this.page.locator(`#password`)
    singInBtnLocator : Locator = this.page.locator(`button[type="submit"]`)
    UserNameErrorMassageLocator : Locator = this.page.locator(`[data-test="username-error"]`)
    eamilErrorMassageLocator : Locator = this.page.locator(`[data-test="email-error"]`)
    passwordErrorMassageLocator : Locator = this.page.locator(`[data-test="password-error"]`)

    // usernmeCredentials : string = "aimtech"
    userNameEmptyErrorMessage : string = "Username is required"
    emailEmptyErrorMessage : string = "Email is required"
    passwordEmptyErrorMessage : string = "Password is required"
    passwordIsLessThanSixCharactersErrorMessage : string = "Password must be at least 6 characters"





    // Actions 
    async goToFromsPage ()
    {
        await this.actions.goToPage("https://auto.aimtech.online/ui-testing/#/forms")
    }


    async enterUsernameText(username : string )
    {
        await this.actions.EnterText(this.usernaemeLocator,username)
    }

    async enterEmailText(email : string)
    {
        await this.actions.EnterText(this.emailLocator,email)
    }

    async enterPasswordText(password : string)
    {
        await this.actions.EnterText(this.passwordLocator,password)

    }

    async PressSingInBtn ()
    {
        await this.actions.clickOnElement(this.singInBtnLocator)
    }


    // assertions 
    async asserstOnUsernameFieldisEmpty()
    {
        await this.assertions.AssertOnText(this.UserNameErrorMassageLocator,this.userNameEmptyErrorMessage)
    }
      async asserstOnEmailFieldisEmpty()
    {
        await this.assertions.AssertOnText(this.eamilErrorMassageLocator,this.emailEmptyErrorMessage)
    }

        async asserstOnpasswordFieldisEmpty()
    {
        await this.assertions.AssertOnText(this.passwordErrorMassageLocator,this.passwordEmptyErrorMessage)
    }   
    
    async asserstOnpasswordFieldisLessThanSixCharacters()
    {
        await this.assertions.AssertOnText(this.passwordErrorMassageLocator,this.passwordIsLessThanSixCharactersErrorMessage)
    }

    async assertLoginBtnToBeEnabled()
    {
        await expect(this.singInBtnLocator).toBeEnabled();
    }
     async assertLoginBtnToBeDisabled()
    {
        await expect(this.singInBtnLocator).toBeDisabled();
        await expect(this.singInBtnLocator).toHaveText("Loading...")
    }






}