const { expect } = require('@wdio/globals')
const expectchai = require('chai').expect

describe('E2E testing', async()=>{
    it('Login', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $('#username').setValue("rahulshettyacademy");
        await $('#password').setValue("learning");
        await $('#signInBtn').click();
        await browser.pause(3000);
        //to select link element containing checkout
        const products = ["iphone X", "Nokia Edge"]
        const link = await $("*=Checkout")
        await link.waitForExist()
        const cards = await $$("div[class='card h-100']")
        for(let i=0;i<cards.length;i++){
            const card = await cards[i].$('div h4 a')
            if(products.includes(await card.getText()))
            {
                await cards[i].$('.card-footer button').click();
            }
        }
       await link.click()
       //xpath selector
       const productPrices = await $$("//tr/td[4]/strong")
       //promises.all is used when in a line we have multiple awaits waiting for the promise to return valueS
       const sumOfProducts = (await Promise.all(await productPrices.map(async(productprice)=> parseInt((await productprice.getText()).split(".")[1].trim())))).reduce((acc,price)=>acc+price, 0)
       console.log(sumOfProducts)

       const TotalValue = await $("h3 strong").getText();
       const totalIntegerValue = parseInt(TotalValue.split(".")[1].trim())
       await expectchai(sumOfProducts).to.equal(totalIntegerValue)
       await $(".btn-success").click();
       await $('#country').setValue("Ind");
       await $(".ls-ellipsis").waitForExist({reverse:true});
       await $("=India").click();
       await $("input[type='submit']").click()
       await expect($(".alert-success")).toHaveTextContaining('Success')
        await browser.pause(3000);
    })
})