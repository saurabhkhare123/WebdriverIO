const { expect, } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')
const SecurePage = require('../pageobjects/secure.page')
const expectchai = require('chai').expect

describe('Functional Testing', () =>{
    xit('scrolldown', async()=>{
        
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await browser.setWindowSize(750, 1300);
        await $("#mousehover").scrollIntoView()
        await $("#mousehover").moveTo();
        await browser.pause(2000)
       await $$('a[href="#top"]').click()
       // await browser.pause(2000)
    })

    it("ToTestSorting", async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        await $("tr th:nth-child(1)").click();

        //retrieve list of vegies
        const veggiesLocators = await $$("tr td:nth-child(1)");
        const veggiesName = veggiesLocators.map(async veggies => await veggies.getText());
        veggies = veggiesName.slice()
        console.log(veggies);
        //storing the sorted array in a new one
        sortedVegigies = veggies.sort();
        expectchai(veggiesName).to.eql(sortedVegigies)

    })

    it("Web search table Filter validation", async()=>{
        await browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
       await  $("input[type='search']").setValue("tomato")
        const veggiesLocators =await  $$("tr td:nth-child(1)")
       await expect(veggiesLocators).toBeElementsArrayOfSize({eq:1})
       await expect( await veggiesLocators[0]).toHaveTextContaining("Tomato")
    })
})