import {SignUpPopup} from "./components/SignUpPopup";
import {SignInPopup} from "./components/SignInPopup.js";
import BasePage from "../BasePage.js";
import GaragePage from "../GaragePage/GaragePage.js";

export class WelcomePage extends BasePage{
    constructor(page) {
        super(page, "/")
    }

    async clickSignUpBtnAndOpenPopup(){
        await this.signUpButton.click()
        return new SignUpPopup(this._page)
    }

    async openSignInPopup(){
        await this.header.signInButton.click()
        return new SignInPopup(this._page)
    }

    async loginAsGuest(){
        await this.header.guestLoginButton.click()
        return new GaragePage(this._page)
    }
}