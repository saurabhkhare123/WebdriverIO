const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const expectchain = require('chai').expect

describe('StartingScript', async () => {
    xit('GetTitle', async () => {
        await browser.url("https://login.kekad.com/Account/Login?ReturnUrl=%2F");
        console.log(await browser.getTitle());
        await $("#email").setValue("bloodryne@simha.in");
        await $(".btn").click();
        await $(".ps-2").click();
        await $("#password").setValue("blood123")
        await browser.pause(9000);
        await $(".btn").click();
        await $(".btn").click();
        /**const pulse = await $$("a.img.ng-star-inserted");
        const select = pulse[3]
        await select.click();**/
        /**   const thirdATag = $('p=Happy');
           await thirdATag.click()
          await $("textarea").setValue("This is pure luck")
          await $("button").click();*/

        await $(".ki-close").click();




        await browser.pause(3000)
    })

    xit('Dynamic DropDown Controls Smoke', async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        await $("#autocomplete").setValue("ind")
        await browser.pause(3000)
        let items = await $$("[class ='ui-menu-item'] div")
       
        /**  To print all the values that are being stored in items
        for (var i = 0; i < await items.length; i++) {
            console.log(await items[i].getText())
        } */

        for(var i=0; i< await items.length; i++){
            if(await items[i].getText() === "India")
            await items[i].click()
        }
        await browser.pause(3000)

    })

    it("Checkbox selection", async() => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        const checkboxes = await $$("input[type='checkbox']");
        await checkboxes[2].click();
        browser.pause(2000);
        console.log(await checkboxes[1].isSelected());
        console.log(await checkboxes[2].isSelected());
        await browser.saveScreenshot("screenshot.png")
    })
})