import {test, request as apiRequest} from "../../../src/fixtures/userGaragePage";
import CarsController from "../../../src/controllers/CarsContoller";
import {USER_SERHII_STATE_PATH} from "../../../src/constants";

test.describe("Cars API", ()=>{
    test.describe("delete car with controller", ()=>{
        let carsController

        test("delete all cars", async ()=>{

            const request = await apiRequest.newContext({
                storageState: USER_SERHII_STATE_PATH
            })

            carsController = new CarsController(request)

            const carsResponse = await carsController.getUserCars()
            const cars = await carsResponse.json()

            await Promise.all(
                cars.data.map((car) => carsController.deleteCar(car.id))
            )
        })
    })
})