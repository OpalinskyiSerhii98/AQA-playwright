import {test, expect, request as apiRequest} from "../../../src/fixtures/userGaragePage";
import {MODELS} from "../../../src/data/models.js";
import {BRANDS} from "../../../src/data/brands.js";
import {USER_SERHII_STATE_PATH} from "../../../src/constants.js";


test.describe.only("Cars API", ()=> {
    test.describe("Create", () => {

        test("missing Brand", async ({request}) => {

            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async () => {
                    const requestBody = {
                        "carBrandId": "",
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "status": "error",
                        "message": "Invalid car brand type"
                    }

                    expect(response.status()).toBe(400)
                    expect(body.status).toBe('error')
                    expect(body.message).toBe('Invalid car brand type')
                })
            }
        })
        test("ivalid Brand", async ({request}) => {

            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async () => {
                    const requestBody = {
                        "carBrandId": "KDASDasjkd",
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100)
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "status": "error",
                        "message": "Invalid car brand type"
                    }

                    expect(response.status()).toBe(400)
                    expect(body.status).toBe('error')
                    expect(body.message).toBe('Invalid car brand type')
                })
            }
        })
        test("Extra keys", async ({request}) => {

            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async () => {
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100),
                        "extra_key": "irrelevant_value"
                    }

                    const response = await request.post('/api/cars', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "status": "error",
                        "message": "\"extra_key\" is not allowed"
                    }

                    expect(response.status()).toBe(400)
                    expect(body.status).toBe('error')
                    expect(body.message).toBe('\"extra_key\" is not allowed')
                })
            }
        })
        test("invalid HTTP methods", async ({request}) => {

            const brand = BRANDS.Audi

            for (const model of Object.values(MODELS[brand.id])) {

                await test.step(`Create car with brand "${brand.title}" and model ${model.title}`, async () => {
                    const requestBody = {
                        "carBrandId": brand.id,
                        "carModelId": model.id,
                        "mileage": Math.floor(Math.random() * 100),
                    }

                    const response = await request.post('/api/cars/123', {
                        data: requestBody
                    })

                    const body = await response.json()
                    const expected = {
                        "status": "error",
                        "message": "Not found"
                    }

                    expect(response.status()).toBe(404)
                    expect(body.status).toBe('error')
                    expect(body.message).toBe('Not found')
                })
            }
        })
    })
})