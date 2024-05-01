import {test, expect} from "../../../src/fixtures/userGaragePage";
import {PROFILE_MOCK_RESPONSE} from "./fixtures/profile";


test.describe('Profile', ()=>{
    test('open profile tab', async ({page})=>{

        await page.route('https://qauto.forstudy.space/api/users/profile', (route)=>{
            return route.fulfill({
                status: 200,
                body: JSON.stringify(PROFILE_MOCK_RESPONSE)
            })
        })
        await page.goto('/panel/profile')

        const profileNameSelector = ".profile_name"
        const profileName = page.locator(profileNameSelector)
        const nameFromProfileMockResponse = "John Doe"

        await expect(profileName).toHaveText(nameFromProfileMockResponse)
    })
})