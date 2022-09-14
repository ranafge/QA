const LoginPage = require('../pageobjects/login.page');
const AfterLoginPage = require('../pageobjects/secure.page');
const SwitchWindowPage = require("../pageobjects/switchWindow.page");

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
            
        await LoginPage.open();
        await LoginPage.login('ranafge', 'pass1478');
        await expect(AfterLoginPage.flashAlert).toHaveTextContaining("Logout");

    });

    it('CHECK LOGOUT BUTTON AFTER LOGIN', async ()=>{
        await LoginPage.open();
        expect(AfterLoginPage.flashAlert).toHaveAttrContaining("Logout");
        await browser.pause(1000)
        
    });
    it("CHECK THE NAVIGATION TO NEXT PAGE", async ()=>{
        await LoginPage.open();
        await LoginPage.login('ranafge', 'pass1478');
        await SwitchWindowPage.link.click();
        expect(SwitchWindowPage.authorName).toHaveText("Marilyn Monroe")


    });
   
})
        
        

    

// test\specs\switchWindow.js

