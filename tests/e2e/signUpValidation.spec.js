import {test, expect} from "@playwright/test";

test.describe("Sign Up Form Validation", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://qauto.forstudy.space/")
        await page.click('text="Sign up"')
    })

    test.describe("Name Validation", ()=> {
        test("Name is required", async ({page}) => {

            const popup = page.locator('app-signup-modal')
            const nameInput = popup.locator('#signupName')
            const nameRequiredErrorMessage = nameInput.locator("+ .invalid-feedback")

            await nameInput.focus()
            await nameInput.blur()
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(nameRequiredErrorMessage).toHaveText('Name required')
        })
        test("Name is invalid", async ({page}) => {
            const invalidInputNameString = "Сергій"

            const popup = page.locator('app-signup-modal')
            const nameInput = popup.locator('#signupName')
            const nameInvalidErrorMessage = nameInput.locator("+ .invalid-feedback")

            await nameInput.fill(invalidInputNameString)
            await nameInput.blur()
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(nameInvalidErrorMessage).toHaveText('Name is invalid')
        })
        test("Name length", async ({page}) => {
            const tooLongName = "asdkleqomroqlfkrpsmrs"
            const tooShortName = "a"

            const popup = page.locator('app-signup-modal')
            const nameInput = popup.locator('#signupName')
            const nameLengthErrorMessage = nameInput.locator("+ .invalid-feedback")

            await nameInput.fill(tooLongName)
            await nameInput.blur()
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(nameLengthErrorMessage).toHaveText('Name has to be from 2 to 20 characters long')

            await nameInput.fill(tooShortName)
            await nameInput.blur()
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(nameLengthErrorMessage).toHaveText('Name has to be from 2 to 20 characters long')
        })
    })
    test.describe("Last Name Validation", ()=> {
        test("Last Name is required", async ({page}) => {

            const popup = page.locator('app-signup-modal')
            const lastNameInput = popup.locator('#signupLastName')
            const lastNameRequiredErrorMessage = lastNameInput.locator("+ .invalid-feedback")

            await lastNameInput.focus()
            await lastNameInput.blur()
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(lastNameRequiredErrorMessage).toHaveText('Last name required')
        })
        test("Last Name is invalid", async ({page}) => {
            const invalidInputLNameString = "Опалінський"

            const popup = page.locator('app-signup-modal')
            const lastNameInput = popup.locator('#signupLastName')
            const lastNameInvalidErrorMessage = lastNameInput.locator("+ .invalid-feedback")

            await lastNameInput.fill(invalidInputLNameString)
            await lastNameInput.blur()
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(lastNameInvalidErrorMessage).toHaveText('Last name is invalid')
        })
        test("Last Name length", async ({page}) => {
            const tooLongLName = "asdkleqomroqlfkrpsmrs"
            const tooShortLName = "a"

            const popup = page.locator('app-signup-modal')
            const lastNameInput = popup.locator('#signupLastName')
            const lastNameLengthErrorMessage = lastNameInput.locator("+ .invalid-feedback")

            await lastNameInput.fill(tooLongLName)
            await lastNameInput.blur()
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(lastNameLengthErrorMessage).toHaveText('Last name has to be from 2 to 20 characters long')

            await lastNameInput.fill(tooShortLName)
            await lastNameInput.blur()
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(lastNameLengthErrorMessage).toHaveText('Last name has to be from 2 to 20 characters long')
        })
    })
    test.describe("Email Validation", ()=> {
        test("Email is required", async ({page})=>{
            const popup = page.locator('app-signup-modal')
            const emailInput = popup.locator('#signupEmail')
            const emailRequiredErrorMessage = emailInput.locator("+ .invalid-feedback")

            await emailInput.focus()
            await emailInput.blur()
            await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(emailRequiredErrorMessage).toHaveText('Email required')
        })
        test("Email is incorrect", async ({page})=>{
            const incorrectEmail = "value"

            const popup = page.locator('app-signup-modal')
            const emailInput = popup.locator('#signupEmail')
            const emailIncorrectErrorMessage =  emailInput.locator("+ .invalid-feedback")

            await emailInput.fill(incorrectEmail)
            await emailInput.blur()
            await expect(emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(emailIncorrectErrorMessage).toHaveText('Email is incorrect')
        })
    })
    test.describe("Password Validation", ()=> {
        test("Password is required", async ({page})=>{
            const popup = page.locator('app-signup-modal')
            const passwordInput = popup.locator('#signupPassword')
            const passwordRequiredErrorMessage = passwordInput.locator("+ .invalid-feedback")

            await passwordInput.focus()
            await passwordInput.blur()
            await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(passwordRequiredErrorMessage).toHaveText('Password required')
        })
        test("Password format", async ({page})=>{
            const incorrectPassword = "1"

            const popup = page.locator('app-signup-modal')
            const passwordInput = popup.locator('#signupPassword')
            const passwordFormatErrorMessage = passwordInput.locator("+ .invalid-feedback")

            await passwordInput.fill(incorrectPassword)
            await passwordInput.blur()
            await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(passwordFormatErrorMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        })
    })

    test.describe("Re-Password Validation", ()=> {
        test("Re-Password is required", async ({page})=>{
            const popup = page.locator('app-signup-modal')
            const rePasswordInput = popup.locator('#signupRepeatPassword')
            const rePasswordRequiredErrorMessage = rePasswordInput.locator("+ .invalid-feedback")

            await rePasswordInput.focus()
            await rePasswordInput.blur()
            await expect(rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(rePasswordRequiredErrorMessage).toHaveText('Re-enter password required')
        })
        test("Re-Password match", async ({page})=>{
            const inputPasswordString ="qwertY1234"
            const incorrectRePassword = "qwertY123"

            const popup = page.locator('app-signup-modal')
            const passwordInput = popup.locator('#signupPassword')
            const rePasswordInput = popup.locator('#signupRepeatPassword')
            const passwordMatchErrorMessage = rePasswordInput.locator("+ .invalid-feedback")

            await passwordInput.fill(inputPasswordString)
            await expect(passwordInput).toHaveValue(inputPasswordString)

            await rePasswordInput.fill(incorrectRePassword)
            await rePasswordInput.blur()
            await expect(rePasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
            await expect(passwordMatchErrorMessage).toHaveText('Passwords do not match')
        })
    })

})

test.describe("Sign Up", ()=> {
    test.beforeEach(async ({page}) => {
        await page.goto("https://qauto.forstudy.space/")
        await page.click('text="Sign up"')
    })

    test("Registration", async ({page})=>{
        const inputNameString ="Serhii"
        const inputLastNameString ="Opalinskyi"
        const inputEmailString ="aqa-sopalinskyi@test.com"
        const inputPasswordString ="qwertY1234"
        const inputRePasswordString ="qwertY1234"

        const popup = page.locator('app-signup-modal')
        const nameInput = popup.locator('#signupName')
        const lastNameInput = popup.locator('#signupLastName')
        const emailInput = popup.locator('#signupEmail')
        const passwordInput = popup.locator('#signupPassword')
        const rePasswordInput = popup.locator('#signupRepeatPassword')

        await nameInput.fill(inputNameString)
        await lastNameInput.fill(inputLastNameString)
        await emailInput.fill(inputEmailString)
        await passwordInput.fill(inputPasswordString)
        await rePasswordInput.fill(inputRePasswordString)

        await expect(nameInput).toHaveValue(inputNameString)
        await expect(lastNameInput).toHaveValue(inputLastNameString)
        await expect(emailInput).toHaveValue(inputEmailString)
        await expect(passwordInput).toHaveValue(inputPasswordString)
        await expect(rePasswordInput).toHaveValue(inputRePasswordString)

        await popup.getByText('Register').click()
        await expect(page, "User should be redirected to garage page").toHaveURL(/garage/)
    })
})