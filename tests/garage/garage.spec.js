import {test, expect} from "../../src/fixtures/userGaragePage";


test.describe.only('Garage', ()=>{
    test('create car', async ({garagePage, page})=>{
        await expect(garagePage.addCarButton).toBeVisible()

        await garagePage.addCarButton.click()

        const brand = "BMW"
        const model = "3"
        const mileage = "180"

        await page.locator("#addCarBrand").selectOption(brand)
        await page.locator("#addCarModel").selectOption(model)
        await page.locator("#addCarMileage").fill(mileage)
        await page.locator('.modal-content  .btn-primary').click()
    })
})