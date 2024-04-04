import {test, expect} from "@playwright/test";
import {WelcomePage} from "../pageObjects/WelcomePage/WelcomePage";

test.describe("Registration", ()=>{
    test.describe("Sign Up", ()=> {
        let welcomePage
        let popup

        test.describe("Positive scenarios", ()=>{
            test.beforeEach(async ({page})=>{
                welcomePage = new WelcomePage(page)
                await welcomePage.navigate()
                popup = await welcomePage.clickSignUpBtnAndOpenPopup()
            })
            test("user should be able to sign up", async ({page})=>{

                const inputNameString ="Serhii"
                const inputLastNameString ="Opalinskyi"
                const inputEmailString ="aqa-sopalinskyi@test.com"
                const inputPasswordString ="qwertY1234"
                const inputRePasswordString ="qwertY1234"

                await popup.nameInput.fill(inputNameString)
                await popup.lastNameInput.fill(inputLastNameString)
                await popup.emailInput.fill(inputEmailString)
                await popup.passwordInput.fill(inputPasswordString)
                await popup.rePasswordInput.fill(inputRePasswordString)
                await popup.registerBtn.click()

                await expect(page, "User should be redirected to garage page").toHaveURL(/garage/)
            })
        })
        test.describe("Negative scenarios", ()=>{
            test.beforeEach(async ({page})=>{
                welcomePage = new WelcomePage(page)
                await welcomePage.navigate()
                popup = await welcomePage.clickSignUpBtnAndOpenPopup()
            })
            test("validation for empty name", async ()=>{

                await popup.nameInput.focus()
                await popup.nameInput.blur()
                await expect(popup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.nameRequiredErrorMessage).toHaveText('Name required')
            })
            test("validation for invalid name", async ()=>{

                const invalidInputNameString = "Сергій"

                await popup.nameInput.fill(invalidInputNameString)
                await popup.nameInput.blur()
                await expect(popup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.nameInvalidErrorMessage).toHaveText('Name is invalid')
            })
            test("validation for name length", async ()=>{

                const tooLongName = "asdkleqomroqlfkrpsmrs"
                const tooShortName = "a"

                await popup.nameInput.fill(tooLongName)
                await popup.nameInput.blur()
                await expect(popup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.nameLengthErrorMessage).toHaveText('Name has to be from 2 to 20 characters long')

                await popup.nameInput.fill(tooShortName)
                await popup.nameInput.blur()
                await expect(popup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.nameLengthErrorMessage).toHaveText('Name has to be from 2 to 20 characters long')
            })
            test("validation for empty last name", async ()=>{

                await popup.lastNameInput.focus()
                await popup.lastNameInput.blur()
                await expect(popup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.lastNameRequiredErrorMessage).toHaveText('Last name required')
            })
            test("validation for invalid last name", async ()=>{

                const invalidInputLNameString = "Опалінський"

                await popup.lastNameInput.fill(invalidInputLNameString)
                await popup.lastNameInput.blur()
                await expect(popup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.lastNameInvalidErrorMessage).toHaveText('Last name is invalid')
            })
            test("validation for last name length", async ()=>{

                const tooLongLName = "asdkleqomroqlfkrpsmrs"
                const tooShortLName = "a"

                await popup.lastNameInput.fill(tooLongLName)
                await popup.lastNameInput.blur()
                await expect(popup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.lastNameLengthErrorMessage).toHaveText('Last name has to be from 2 to 20 characters long')

                await popup.lastNameInput.fill(tooShortLName)
                await popup.lastNameInput.blur()
                await expect(popup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.lastNameLengthErrorMessage).toHaveText('Last name has to be from 2 to 20 characters long')
            })
            test("validation for empty email", async ()=>{

                await popup.emailInput.focus()
                await popup.emailInput.blur()
                await expect(popup.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.emailRequiredErrorMessage).toHaveText('Email required')
            })
            test("validation for incorrect email", async ()=>{

                const incorrectEmail = "value"

                await popup.emailInput.fill(incorrectEmail)
                await popup.emailInput.blur()
                await expect(popup.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.emailIncorrectErrorMessage).toHaveText('Email is incorrect')
            })
            test("validation for empty password", async ()=>{

                await popup.passwordInput.focus()
                await popup.passwordInput.blur()
                await expect(popup.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.passwordRequiredErrorMessage).toHaveText('Password required')
            })
            test("validation for incorrect password", async ()=>{

                const incorrectPassword = "1"

                await popup.passwordInput.fill(incorrectPassword)
                await popup.passwordInput.blur()
                await expect(popup.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.passwordFormatErrorMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            })
            test("validation for empty re-password", async ()=>{

                await popup.rePasswordInput.focus()
                await popup.rePasswordInput.blur()
                await expect(popup.rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.rePasswordRequiredErrorMessage).toHaveText('Re-enter password required')
            })
            test("validation for matching re-password", async ()=>{

                const inputPasswordString ="qwertY1234"
                const incorrectRePassword = "qwertY123"

                await popup.passwordInput.fill(inputPasswordString)
                await popup.rePasswordInput.fill(incorrectRePassword)
                await popup.rePasswordInput.blur()
                await expect(popup.rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
                await expect(popup.rePasswordMatchErrorMessage).toHaveText('Passwords do not match')
            })
        })
    })
})