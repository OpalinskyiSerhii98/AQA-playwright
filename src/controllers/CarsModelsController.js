import BaseController from "./BaseController.js";


export default class CarsModelsController extends BaseController{
    #GET_USER_CARS_PATH = '/api/cars/models'

    constructor(request) {
        super(request)
    }

    async getUserCars(){
        return this._request.get(this.#GET_USER_CARS_PATH)
    }

}