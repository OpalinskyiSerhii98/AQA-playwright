import {test, expect} from "../../src/fixtures/userGaragePage";
import {PROFILE_MOCK_RESPONSE} from "./fixtures/profile";


test.describe.only('Profile', ()=>{
    test('open profile tab', async ({page})=>{

        await page.route('https://qauto.forstudy.space/api/users/profile', (route)=>{
            return route.fulfill({
                status: 200,
                body: JSON.stringify(PROFILE_MOCK_RESPONSE)
            })
        })
        await page.goto('/panel/profile')

        const profileName = await page.$eval('.profile_name', (element) => element.textContent.trim());
        expect(profileName).toBe('John Doe');
    })
})