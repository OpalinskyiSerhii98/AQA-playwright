import {test, expect} from "../../src/fixtures/userGaragePage";


test.describe('Garage', ()=>{
    test('create car', async ({garagePage, page})=>{
        await expect(garagePage.addCarButton).toBeVisible()

        await garagePage.addCarButton.click()

        await page.locator("#addCarBrand").selectOption('Audi')
        await page.locator("#addCarModel").selectOption('TT')
        await page.locator("#addCarMileage").fill('180')
        await page.locator('.modal-content  .btn-primary').click()
    })
})