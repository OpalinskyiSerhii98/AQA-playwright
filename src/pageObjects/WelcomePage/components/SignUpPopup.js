

export class SignUpPopup {
    _nameInputSelector = '#signupName'
    _lastNameInputSelector = '#signupLastName'
    _emailInputSelector = '#signupEmail'
    _passwordInputSelector = '#signupPassword'
    _rePasswordInputSelector = '#signupRepeatPassword'
    constructor(page) {
        this._page = page
        this.container = page.locator('app-signup-modal')

        this.nameInput = this.container.locator(this._nameInputSelector)
        this.nameRequiredErrorMessage = this.container.locator(`${this._nameInputSelector} + .invalid-feedback`)
        this.nameInvalidErrorMessage = this.container.locator(`${this._nameInputSelector} + .invalid-feedback`)
        this.nameLengthErrorMessage = this.container.locator(`${this._nameInputSelector} + .invalid-feedback`)

        this.lastNameInput = this.container.locator(this._lastNameInputSelector)
        this.lastNameRequiredErrorMessage = this.container.locator(`${this._lastNameInputSelector} + .invalid-feedback`)
        this.lastNameInvalidErrorMessage = this.container.locator(`${this._lastNameInputSelector} + .invalid-feedback`)
        this.lastNameLengthErrorMessage = this.container.locator(`${this._lastNameInputSelector} + .invalid-feedback`)

        this.emailInput = this.container.locator(this._emailInputSelector)
        this.emailRequiredErrorMessage = this.container.locator(`${this._emailInputSelector} + .invalid-feedback`)
        this.emailIncorrectErrorMessage = this.container.locator(`${this._emailInputSelector} + .invalid-feedback`)

        this.passwordInput = this.container.locator(this._passwordInputSelector)
        this.passwordRequiredErrorMessage = this.container.locator(`${this._passwordInputSelector} + .invalid-feedback`)
        this.passwordFormatErrorMessage = this.container.locator(`${this._passwordInputSelector} + .invalid-feedback`)

        this.rePasswordInput = this.container.locator(this._rePasswordInputSelector)
        this.rePasswordRequiredErrorMessage = this.container.locator(`${this._rePasswordInputSelector} + .invalid-feedback`)
        this.rePasswordMatchErrorMessage = this.container.locator(`${this._rePasswordInputSelector} + .invalid-feedback`)

        this.registerBtn = this.container.getByText('Register')
    }
}

