import {test, expect, request as apiRequest} from "../../../src/fixtures/userGaragePage";
import {MODELS} from "../../../src/data/models.js";
import {BRANDS} from "../../../src/data/brands.js";
import {USER_SERHII_STATE_PATH} from "../../../src/constants.js";


test.describe("Cars API", ()=>{
    test.describe("Create", ()=>{
        test.afterAll(async ()=>{
            const request = await apiRequest.newContext({
                storageState: USER_SERHII_STATE_PATH
            })

            const carsResponse = await request.get('/api/cars')
            const cars = await carsResponse.json()

            await Promise.all(
                cars.data.map((car) => request.delete(`/api/cars/${car.id}`))
            )
        })

        test("create Audi cars", async ({request})=>{

            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

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
                })
            }
        })
        test("create BMW cars", async ({request})=>{

            const brand = BRANDS.BMW

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

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
                })
            }
        })
        test("create Ford cars", async ({request})=>{

            const brand = BRANDS.Ford

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

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
                })
            }
        })
        test("create Porsche cars", async ({request})=>{

            const brand = BRANDS.Porsche

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

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
                })
            }
        })
        test("create Fiat cars", async ({request})=>{

            const brand = BRANDS.Fiat

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async ()=>{
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

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
                })
            }
        })
    })
})