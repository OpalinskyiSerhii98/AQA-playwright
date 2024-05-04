import BaseController from "./BaseController.js";


export default class CarsBrandController extends BaseController{
    #GET_USER_CARS_PATH = '/api/cars/brands'

    async getUserCars(){
        return this._request.get(this.#GET_USER_CARS_PATH)
    }

}