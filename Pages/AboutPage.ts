import BasePage from "./BasePage";

export default class AboutPage extends BasePage
{
    // Locators 
    private readonly  aboutPageBtnLocator = this.page.locator("(//a[@href='#/about'])[2]")
    private readonly aboutPageHeaderLocator = this.page.locator("//h1[contains(text(),'About Test Automation Practice')]")
    private readonly AboutHeaderPageText : string = 'About Test Automation Practice'

    // Actions 

    async goToAboutPage()
    {
       await  this.actions.goToPage('https://auto.aimtech.online/ui-testing/#/about')
    }

     async ClickOnAboutBtnPage()
     {
       await  this.actions.clickOnElement(this.aboutPageBtnLocator)
     }
    // Assertions
    async assertAboutHeaderText()
    {
       await  this.assertions.AssertOnText(this.aboutPageHeaderLocator,this.AboutHeaderPageText)
    }
}