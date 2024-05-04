import {test, expect} from "../../../src/fixtures/userGaragePage.js";
import CarsController from "../../../src/controllers/CarsContoller.js";
import {CARS} from "../../../src/data/cars";
import CarsByIDController from "../../../src/controllers/CarsByIDController.js"
import CarsModelsController from "../../../src/controllers/CarsModelsController.js";
import {MODELS_CARS} from "../../../src/data/carsModels";
import CarsModelsByIDController from "../../../src/controllers/CarsModelsByIDController.js";
import {CAR_MODEL} from "../../../src/data/carModel";
import CarsBrandController from "../../../src/controllers/CarsBrandController.js";
import {CARS_BRANDS} from "../../../src/data/carsBrands";
import {BRANDS} from "../../../src/data/brands";
import CarsBrandByIDController from "../../../src/controllers/CarsBrandByIDController";


test.describe("Cars API",
    () => {
        test.describe("Get with Controller", () => {
            let carsController
            let carsByIDController
            let carsModelsController
            let carsModelsByIDController
            let carsBrandController
            let carsBrandByIDController

            test.beforeEach(async ({request}) => {
                carsController = new CarsController(request)
                carsByIDController = new CarsByIDController(request)
                carsModelsController = new CarsModelsController(request)
                carsModelsByIDController = new CarsModelsByIDController(request)
                carsBrandController = new CarsBrandController(request)
                carsBrandByIDController = new CarsBrandByIDController(request)
            })

            test("get cars", async () => {

                const cars = CARS

                const response = await carsController.getUserCars(cars)

                const body = await response.json()

                expect(response.status()).toBe(200)
                expect(body.status).toBe('ok')
                expect(body.data.length).toEqual(Object.keys(cars).length);
                body.data.forEach((car, index) => {
                    const carKey = Object.keys(cars)[index]
                    expect(car).toEqual(cars[carKey])
                })
            })
            test("get car by id", async () => {

                const car = CARS.Audi_Q7
                const carID = CARS.Audi_Q7.id

                const response = await carsByIDController.getUserCars(carID)

                const body = await response.json()

                expect(response.status()).toBe(200)
                expect(body.status).toBe('ok')
                expect(body.data).toEqual(car)
            })
            test("get cars brands", async () => {

                const carsBrands = CARS_BRANDS

                const response = await carsBrandController.getUserCars(carsBrands)

                const body = await response.json()

                expect(response.status()).toBe(200)
                expect(body.status).toBe('ok')
                expect(body.data).toEqual(carsBrands)
            })
            test("get cars brand by id", async () => {

                const carsBrands = BRANDS.Ford
                const carsBrandsId = BRANDS.Ford.id

                const response = await carsBrandByIDController.getUserCars(carsBrandsId)

                const body = await response.json()

                expect(response.status()).toBe(200)
                expect(body.status).toBe('ok')
                expect(body.data).toEqual(carsBrands)
            })
            test("get cars models", async () => {

                const carsModels = MODELS_CARS

                const response = await carsModelsController.getUserCars(carsModels)

                const body = await response.json()

                expect(response.status()).toBe(200)
                expect(body.status).toBe('ok')
                expect(body.data).toEqual(carsModels)
            })
            test("get cars models by id", async () => {

                const carsModels = CAR_MODEL.TT
                const carsModelsId = CAR_MODEL.TT.id

                const response = await carsModelsByIDController.getUserCars(carsModelsId)

                const body = await response.json()

                expect(response.status()).toBe(200)
                expect(body.status).toBe('ok')
                expect(body.data).toEqual(carsModels)
            })

        })
    })