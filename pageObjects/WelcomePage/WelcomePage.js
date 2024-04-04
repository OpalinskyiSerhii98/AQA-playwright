import {SignUpPopup} from "./components/SignUpPopup";

export class WelcomePage {
    constructor(page) {
        this._page = page
        this.signUpBtn = page.locator('button', {hasText: 'Sign Up'})
    }

    async navigate(){
        await this._page.goto("")
    }

    async clickSignUpBtnAndOpenPopup(){
        await this.signUpBtn.click()
        return new SignUpPopup(this._page)
    }
}