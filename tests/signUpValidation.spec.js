import {test, expect} from "@playwright/test";

test.describe("Validation", ()=>{
    test.beforeEach(async ({page})=>{
        await page.goto("https://qauto.forstudy.space/")
        await page.click('text="Sign up"')
    })

    test("Name", async ({page})=>{
        const inputNameString ="Serhii"

        const popup = page.locator('app-signup-modal')
        const nameInput = popup.locator('#signupName')
        const nameErrorMessage =  popup.locator('p', {hasText: 'Name required'})
        const nameErrorMessage2 =  popup.locator('p', {hasText: 'Name is invalid'})
        const nameErrorMessage3 =  popup.locator('p', {hasText: 'Name has to be from 2 to 20 characters long'})

        await nameInput.focus()
        await nameInput.blur()
        await expect(nameErrorMessage).toBeVisible()
        await nameInput.fill("Сергій")
        await nameInput.blur()
        await expect(nameErrorMessage2).toBeVisible()
        await nameInput.fill("asdkleqomroqlfkrpsmrs")
        await nameInput.blur()
        await expect(nameErrorMessage3).toBeVisible()

        await nameInput.fill("a")
        await nameInput.blur()
        await expect(nameErrorMessage3).toBeVisible()

        await nameInput.fill(inputNameString)

        await expect(nameInput).toHaveValue(inputNameString)
    })

    test("LastName", async ({page})=>{
        const inputLastNameString ="Opalinskyi"

        const popup = page.locator('app-signup-modal')
        const lastNameInput = popup.locator('#signupLastName')
        const lastNameErrorMessage =  popup.locator('p', {hasText: 'Last name required'})
        const lastNameErrorMessage2 =  popup.locator('p', {hasText: 'Last name is invalid'})
        const lastNameErrorMessage3 =  popup.locator('p', {hasText: 'Last name has to be from 2 to 20 characters long'})

        await lastNameInput.focus()
        await lastNameInput.blur()
        await expect(lastNameErrorMessage).toBeVisible()
        await lastNameInput.fill("Опалінський")
        await lastNameInput.blur()
        await expect(lastNameErrorMessage2).toBeVisible()
        await lastNameInput.fill("asdkleqomroqlfkrpsmrs")
        await lastNameInput.blur()
        await expect(lastNameErrorMessage3).toBeVisible()

        await lastNameInput.fill("a")
        await lastNameInput.blur()
        await expect(lastNameErrorMessage3).toBeVisible()

        await lastNameInput.fill(inputLastNameString)

        await expect(lastNameInput).toHaveValue(inputLastNameString)
    })

    test("Email", async ({page})=>{
        const inputEmailString ="aqa-sopalinskyi@test.com"

        const popup = page.locator('app-signup-modal')
        const emailInput = popup.locator('#signupEmail')
        const emailErrorMessage =  popup.locator('p', {hasText: 'Email required'})
        const emailErrorMessage2 =  popup.locator('p', {hasText: 'Email is incorrect'});

        await emailInput.focus()
        await emailInput.blur()
        await expect(emailErrorMessage).toBeVisible()
        await emailInput.fill("value")
        await emailInput.blur()
        await expect(emailErrorMessage2).toBeVisible()
        await emailInput.fill(inputEmailString)

        await expect(emailInput).toHaveValue(inputEmailString)
    })

    test("Password", async ({page})=>{
        const inputPasswordString ="qwertY1234"

        const popup = page.locator('app-signup-modal')
        const passwordInput = popup.locator('#signupPassword')
        const passwordErrorMessage =  popup.locator('p', {hasText: 'Password required'})
        const passwordErrorMessage2 =  popup.locator('p', {hasText: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'});

        await passwordInput.focus()
        await passwordInput.blur()
        await expect(passwordErrorMessage).toBeVisible()
        await passwordInput.fill("1")
        await passwordInput.blur()
        await expect(passwordErrorMessage2).toBeVisible()
        await passwordInput.fill(inputPasswordString)

        await expect(passwordInput).toHaveValue(inputPasswordString)
    })

    test("Re-enter password", async ({page})=>{
        const inputRePasswordString ="qwertY1234"

        const popup = page.locator('app-signup-modal')
        const rePasswordInput = popup.locator('#signupRepeatPassword')
        const rePasswordErrorMessage =  popup.locator('p', {hasText: 'Re-enter password required'})
        const rePasswordErrorMessage2 =  popup.locator('p', {hasText: 'Passwords do not match'});

        await rePasswordInput.focus()
        await rePasswordInput.blur()
        await expect(rePasswordErrorMessage).toBeVisible()
        await rePasswordInput.fill("qwertY123")
        await rePasswordInput.blur()
        await expect(rePasswordErrorMessage2).toBeVisible()
        await rePasswordInput.fill(inputRePasswordString)

        await expect(rePasswordInput).toHaveValue(inputRePasswordString)
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
    })
})