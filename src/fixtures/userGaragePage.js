import {expect as baseExpect, test as base} from "@playwright/test";
import {WelcomePage} from "../pageObjects/WelcomePage/WelcomePage";
import GaragePage from "../pageObjects/GaragePage/GaragePage";
import {USER_SERHII_STATE_PATH} from "../constants";

export const test = base.extend({
    welcomePage: async ({page}, use)=> {
        const welcomePage = new WelcomePage(page)
        await use(welcomePage)
    },
    page: async ({browser}, use)=>{
        const ctx = await browser.newContext({
            storageState: USER_SERHII_STATE_PATH
        })
        const page = await ctx.newPage()

        await use(page)

        await ctx.close()
    },
    garagePage: async ({page}, use)=>{
        const garagePage = new GaragePage(page)
        await garagePage.navigate()

        await use(garagePage)
    }
})

export const expect = baseExpect