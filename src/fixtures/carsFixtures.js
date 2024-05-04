import {expect} from "@playwright/test";

export const CAR = {
    'carBrandId': 1,
    'carModelId': 2,
    'mileage': 100
}

export const EDITED_CAR = {
    'carBrandId': 2,
    'carModelId': 8,
    'mileage': 150
}
export const EDITED_CAR_RESPONSE = {
    "id": expect.any(Number),
    "carBrandId": EDITED_CAR.carBrandId,
    "carModelId": EDITED_CAR.carModelId,
    "initialMileage": expect.any(Number),
    "updatedMileageAt": expect.any(String),
    "carCreatedAt": expect.any(String),
    "mileage": EDITED_CAR.mileage,
    "brand": expect.any(String),
    "model": expect.any(String),
    "logo": expect.any(String)
}

export async function expectedCarBody(responseCreateCar) {
    const responseCarBody = await responseCreateCar.json()
    return {
        "id": responseCarBody.data.id,
        "carBrandId": responseCarBody.data.carBrandId,
        "carModelId": responseCarBody.data.carModelId,
        "initialMileage": responseCarBody.data.initialMileage,
        "updatedMileageAt": expect.any(String),
        "carCreatedAt": expect.any(String),
        "mileage": responseCarBody.data.mileage,
        "brand": responseCarBody.data.brand,
        "model": responseCarBody.data.model,
        "logo": expect.any(String)
    }
}
