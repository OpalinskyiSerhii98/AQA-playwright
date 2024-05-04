import BaseController from "./BaseController.js";


export default class CarsModelsByIDController extends BaseController{
    #GET_USER_CARS_PATH = '/api/cars/models/{id}'

    constructor(request) {
        super(request)
    }

    async getUserCars(id){
        return this._request.get(this.#GET_USER_CARS_PATH.replace('{id}', id))
    }

}