import {test, expect} from "../../../src/fixtures/userGaragePage.js";
import {MODELS} from "../../../src/data/models.js";
import {BRANDS} from "../../../src/data/brands.js";
import moment from "moment";
import CarsController from "../../../src/controllers/CarsContoller.js";


test.describe("Cars API", ()=>{
    test.describe("Create with Controller", ()=>{
        let carsController

        test.beforeEach(async ({request})=>{
            carsController = new CarsController(request)
        })

        test("create Audi cars", async ()=>{

            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }
                    const startTime = new Date()

                    const response = await carsController.createCar(requestBody)

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(response.status()).toBe(201)
                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                    expect(moment(body.updatedMileageAt).isAfter(startTime)).toBe(true)
                    expect(moment(body.carCreatedAt).diff(startTime, 'seconds')).toBeLessThanOrEqual(3)
                })
            }
        })
        test("create BMW cars", async ()=>{

            const brand = BRANDS.BMW

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const startTime = new Date()

                    const response = await carsController.createCar(requestBody)

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(response.status()).toBe(201)
                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                    expect(moment(body.updatedMileageAt).isAfter(startTime)).toBe(true)
                    expect(moment(body.carCreatedAt).diff(startTime, 'seconds')).toBeLessThanOrEqual(3)
                })
            }
        })
        test("create Ford cars", async ()=>{

            const brand = BRANDS.Ford

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const startTime = new Date()

                    const response = await carsController.createCar(requestBody)

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(response.status()).toBe(201)
                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                    expect(moment(body.updatedMileageAt).isAfter(startTime)).toBe(true)
                    expect(moment(body.carCreatedAt).diff(startTime, 'seconds')).toBeLessThanOrEqual(3)
                })
            }
        })
        test("create Porsche cars", async ()=>{

            const brand = BRANDS.Porsche

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const startTime = new Date()

                    const response = await carsController.createCar(requestBody)

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(response.status()).toBe(201)
                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                    expect(moment(body.updatedMileageAt).isAfter(startTime)).toBe(true)
                    expect(moment(body.carCreatedAt).diff(startTime, 'seconds')).toBeLessThanOrEqual(3)
                })
            }
        })
        test("create Fiat cars", async ()=>{

            const brand = BRANDS.Fiat

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const startTime = new Date()

                    const response = await carsController.createCar(requestBody)

                    const body = await response.json()
                    const expected = {
                        "id": expect.any(Number),
                        "carBrandId": requestBody.carBrandId,
                        "carModelId": requestBody.carModelId,
                        "initialMileage": requestBody.mileage,
                        "updatedMileageAt": expect.any(String),
                        "carCreatedAt": expect.any(String),
                        "mileage": requestBody.mileage,
                        "brand": brand.title,
                        "model": model.title,
                        "logo": brand.logoFilename
                    }

                    expect(response.status()).toBe(201)
                    expect(body.status).toBe('ok')
                    expect(body.data).toEqual(expected)
                    expect(moment(body.updatedMileageAt).isAfter(startTime)).toBe(true)
                    expect(moment(body.carCreatedAt).diff(startTime, 'seconds')).toBeLessThanOrEqual(3)
                })
            }
        })
    })
})