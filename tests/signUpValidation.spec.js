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
            //const nameRequiredErrorMessage = popup.locator('p', {hasText: 'Name required'})
            const nameRequiredErrorMessage = popup.locator('p')

            await nameInput.focus()
            await nameInput.blur()
            await expect(nameRequiredErrorMessage).toHaveText('Name required')
            //await expect(nameRequiredErrorMessage).toBeVisible()
        })
        test("Name is invalid", async ({page}) => {
            const invalidInputNameString = "Сергій"

            const popup = page.locator('app-signup-modal')
            const nameInput = popup.locator('#signupName')
            //const nameInvalidErrorMessage = popup.locator('p', {hasText: 'Name is invalid'})
            const nameInvalidErrorMessage = popup.locator('p')

            await nameInput.fill(invalidInputNameString)
            await nameInput.blur()
            await expect(nameInvalidErrorMessage).toHaveText('Name is invalid')
            //await expect(nameInvalidErrorMessage).toBeVisible()
        })
        test("Name length", async ({page}) => {
            const tooLongName = "asdkleqomroqlfkrpsmrs"
            const tooShortName = "a"

            const popup = page.locator('app-signup-modal')
            const nameInput = popup.locator('#signupName')
            //const nameLengthErrorMessage = popup.locator('p', {hasText: 'Name has to be from 2 to 20 characters long'})
            const nameLengthErrorMessage = popup.locator('p')

            await nameInput.fill(tooLongName)
            await nameInput.blur()
            await expect(nameLengthErrorMessage).toHaveText('Name has to be from 2 to 20 characters long')
            //await expect(nameLengthErrorMessage).toBeVisible()

            await nameInput.fill(tooShortName)
            await nameInput.blur()
            await expect(nameLengthErrorMessage).toHaveText('Name has to be from 2 to 20 characters long')
            //await expect(nameLengthErrorMessage).toBeVisible()
        })
    })
    test.describe("Last Name Validation", ()=> {
        test("Last Name is required", async ({page}) => {

            const popup = page.locator('app-signup-modal')
            const lastNameInput = popup.locator('#signupLastName')
            //const lastNameErrorMessage =  popup.locator('p', {hasText: 'Last name required'})
            const lastNameRequiredErrorMessage = popup.locator('p')

            await lastNameInput.focus()
            await lastNameInput.blur()
            await expect(lastNameRequiredErrorMessage).toHaveText('Last name required')
            //await expect(lastNameRequiredErrorMessage).toBeVisible()
        })
        test("Last Name is invalid", async ({page}) => {
            const invalidInputLNameString = "Опалінський"

            const popup = page.locator('app-signup-modal')
            const lastNameInput = popup.locator('#signupLastName')
            //const lastNameInvalidErrorMessage =  popup.locator('p', {hasText: 'Last name is invalid'})
            const lastNameInvalidErrorMessage = popup.locator('p')

            await lastNameInput.fill(invalidInputLNameString)
            await lastNameInput.blur()
            await expect(lastNameInvalidErrorMessage).toHaveText('Last name is invalid')
            //await expect(lastNameInvalidErrorMessage).toBeVisible()
        })
        test("Last Name length", async ({page}) => {
            const tooLongLName = "asdkleqomroqlfkrpsmrs"
            const tooShortLName = "a"

            const popup = page.locator('app-signup-modal')
            const lastNameInput = popup.locator('#signupLastName')
            //const lastNameLengthErrorMessage =  popup.locator('p', {hasText: 'Last name has to be from 2 to 20 characters long'})
            const lastNameLengthErrorMessage = popup.locator('p')

            await lastNameInput.fill(tooLongLName)
            await lastNameInput.blur()
            await expect(lastNameLengthErrorMessage).toHaveText('Last name has to be from 2 to 20 characters long')
            //await expect(lastNameLengthErrorMessage).toBeVisible()

            await lastNameInput.fill(tooShortLName)
            await lastNameInput.blur()
            await expect(lastNameLengthErrorMessage).toHaveText('Last name has to be from 2 to 20 characters long')
            //await expect(lastNameLengthErrorMessage).toBeVisible()
        })
    })
    test.describe("Email Validation", ()=> {
        test("Email is required", async ({page})=>{
            const popup = page.locator('app-signup-modal')
            const emailInput = popup.locator('#signupEmail')
            //const emailRequiredErrorMessage =  popup.locator('p', {hasText: 'Email required'})
            const emailRequiredErrorMessage =  popup.locator('p')

            await emailInput.focus()
            await emailInput.blur()
            await expect(emailRequiredErrorMessage).toHaveText('Email required')
            //await expect(emailRequiredErrorMessage).toBeVisible()
        })
        test("Email is incorrect", async ({page})=>{
            const incorrectEmail = "value"

            const popup = page.locator('app-signup-modal')
            const emailInput = popup.locator('#signupEmail')
            //const emailIncorrectErrorMessage =  popup.locator('p', {hasText: 'Email is incorrect'})
            const emailIncorrectErrorMessage =  popup.locator('p')

            await emailInput.fill(incorrectEmail)
            await emailInput.blur()
            await expect(emailIncorrectErrorMessage).toHaveText('Email is incorrect')
            //await expect(emailIncorrectErrorMessage).toBeVisible()
        })
    })
    test.describe("Password Validation", ()=> {
        test("Password is required", async ({page})=>{
            const popup = page.locator('app-signup-modal')
            const passwordInput = popup.locator('#signupPassword')
            //const passwordRequiredErrorMessage =  popup.locator('p', {hasText: 'Password required'})
            const passwordRequiredErrorMessage = popup.locator('p')

            await passwordInput.focus()
            await passwordInput.blur()
            await expect(passwordRequiredErrorMessage).toHaveText('Password required')
            //await expect(passwordRequiredErrorMessage).toBeVisible()
        })
        test("Password format", async ({page})=>{
            const incorrectPassword = "1"

            const popup = page.locator('app-signup-modal')
            const passwordInput = popup.locator('#signupPassword')
            //const passwordLengthErrorMessage =  popup.locator('p', {hasText: 'Password required'})
            const passwordFormatErrorMessage = popup.locator('p')

            await passwordInput.fill(incorrectPassword)
            await passwordInput.blur()
            await expect(passwordFormatErrorMessage).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            //await expect(passwordFormatErrorMessage).toBeVisible()
        })
    })

    test.describe("Re-Password Validation", ()=> {
        test("Re-Password is required", async ({page})=>{
            const popup = page.locator('app-signup-modal')
            const rePasswordInput = popup.locator('#signupRepeatPassword')
            //const rePasswordRequiredErrorMessage =  popup.locator('p', {hasText: 'Re-enter password required'})
            const rePasswordRequiredErrorMessage = popup.locator('p')

            await rePasswordInput.focus()
            await rePasswordInput.blur()
            await expect(rePasswordRequiredErrorMessage).toHaveText('Re-enter password required')
            //await expect(rePasswordRequiredErrorMessage).toBeVisible()
        })
        test("Re-Password match", async ({page})=>{
            const inputPasswordString ="qwertY1234"
            const incorrectRePassword = "qwertY123"

            const popup = page.locator('app-signup-modal')
            const passwordInput = popup.locator('#signupPassword')
            const rePasswordInput = popup.locator('#signupRepeatPassword')
            //const passwordMatchErrorMessage =  popup.locator('p', {hasText: 'Passwords do not match'})
            const passwordMatchErrorMessage = popup.locator('p')

            await passwordInput.fill(inputPasswordString)
            await expect(passwordInput).toHaveValue(inputPasswordString)

            await rePasswordInput.fill(incorrectRePassword)
            await rePasswordInput.blur()
            await expect(passwordMatchErrorMessage).toHaveText('Passwords do not match')
            //await expect(passwordMatchErrorMessage).toBeVisible()
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

        await popup.locator('text="Register"').click()
        await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage')
    })
})