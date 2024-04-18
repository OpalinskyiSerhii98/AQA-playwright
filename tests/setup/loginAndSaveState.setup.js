import {test as setup} from "@playwright/test";
import {WelcomePage} from "../../src/pageObjects/WelcomePage/WelcomePage";
import {expect} from "../../src/fixtures/userGaragePage";
import {USER_SERHII_STATE_PATH} from "../../src/constants";

setup.describe('Setup', ()=>{
    setup("Login and Save", async({page})=>{
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        const signInPopUp = await welcomePage.openSignInPopup()
        await signInPopUp.emailInput.fill('aqa-sopalinskyi@test.com')
        await signInPopUp.passwordInput.fill('qwertY1234')
        await signInPopUp.loginBtn.click()

        await expect(page).toHaveURL(/garage/)

        await page.context().storageState({
            path: USER_SERHII_STATE_PATH
        })
    } )
})