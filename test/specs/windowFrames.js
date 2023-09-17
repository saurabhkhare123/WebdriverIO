const { expect, } = require('@wdio/globals')
const expectchai = require('chai').expect

describe("Parent and child windows switch", async()=>{

    xit('Parent and child window switch', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
        await $(".blinkingText").click();
        //to store all opened window handles
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]) //to switch to a different window
        console.log(await $("h1").getText());
        console.log(await browser.getTitle());
        await browser.closeWindow()     //to close the child window once the work is done
        await browser.switchToWindow(handles[0]);

        //to open a new window
        await browser.newWindow("https://login.kekad.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3D2fcbe7e0-0fb4-4f6d-86bc-19ffc42f2f25%26state%3DQkRackJESGZTcHZhNX5GT2V3WUZyTm16LTFEeDFrNmFJa3hSMjRWS2p1dk9-%26redirect_uri%3Dhttps%253A%252F%252Fbloodryne.kekad.com%26scope%3Dopenid%2520offline_access%2520kekahr.api%2520hiro.api%26code_challenge%3DaRGXghoR7kJxQRP5xzv39UnphWKcL-3jEfOdiu1Eg74%26code_challenge_method%3DS256%26nonce%3DQkRackJESGZTcHZhNX5GT2V3WUZyTm16LTFEeDFrNmFJa3hSMjRWS2p1dk9-");
        console.log(await browser.getTitle());
        //to switch back to the previous window
        //webdriver io will try to match the url with all open windows and will switch to the one we provided
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/");

    })

    it('Frames Switch', async() => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $('#mousehover').scrollIntoView();
        // to find the count of links present in a page
        console.log(await $$("a").length)
        // to switch to iFrame present in a page
        await browser.switchToFrame(await $("[id='courses-iframe']"));
        console.log(await $("=Courses").getTagName())
        console.log(await $$("a").length)
        //to switch page to parent page where iframe is present or we can say by passing null value we are exiting from the page
        await browser.switchToFrame(null)
        console.log(await $$("a").length)

    })

})