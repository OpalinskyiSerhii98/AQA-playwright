import BaseComponent from "./BaseComponent.js";


export default class Body extends BaseComponent {
    constructor(page) {
        super(page, page.locator('body'));
        this.signUpButton =  page.locator('button', {hasText: 'Sign Up'})
    }
}