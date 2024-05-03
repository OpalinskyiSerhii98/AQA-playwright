import BaseComponent from "./BaseComponent";


export default class Section extends BaseComponent {
    constructor(page) {
        super(page, page.locator('section'));
        this.signUpButton = page.locator('button', {hasText: 'Sign Up'})
    }
}