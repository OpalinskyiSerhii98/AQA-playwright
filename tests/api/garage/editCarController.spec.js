import {test, expect} from "../../../src/fixtures/userGaragePage.js";
import CarsController from "../../../src/controllers/CarsContoller.js";
import {
    CAR,
    EDITED_CAR_RESPONSE,
    EDITED_CAR,
    expectedCarBody
} from "../../../src/fixtures/carsFixtures.js";


test.describe("Cars API", ()=> {
    test.describe("Edit with Controller", () => {
        let carsController
        let carId

        test.beforeEach(async ({request}) => {
            carsController = new CarsController(request)
        })
        test("Edit car", async () => {
            const responseCreateCar = await carsController.createCar(CAR)
            expect(responseCreateCar.status()).toBe(201)
            carId = (await responseCreateCar.json()).data.id
            const responseEditCar = await carsController.updateCar((await responseCreateCar.json()).data.id, EDITED_CAR)
            const carEditBody = await expectedCarBody(responseEditCar)
            expect(responseEditCar.status()).toBe(200)
            expect(carEditBody).toEqual(EDITED_CAR_RESPONSE)
        })
    })

})
