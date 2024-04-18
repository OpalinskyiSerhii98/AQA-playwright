import BaseComponent from "../../../components/BaseComponent.js";


export class SignInPopup extends BaseComponent {
    _emailInputSelector = '#signinEmail'
    _passwordInputSelector = '#signinPassword'
    _loginBtn = '.btn-primary'

    constructor(page) {
        super(page, page.locator('app-signin-modal'))
        this.emailInput =  this.container.locator(this._emailInputSelector)
        this.emailInputErrorMessage =  this.container.locator(`${this._emailInputSelector} + .invalid-feedback`)

        this.passwordInput =  this.container.locator(this._passwordInputSelector)
        this.passwordInputErrorMessage =  this.container.locator(`${this._passwordInputSelector} + .invalid-feedback`)

        this.loginBtn = this.container.locator(this._loginBtn)
    }
}