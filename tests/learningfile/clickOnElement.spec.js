const { test, expect } = require('@playwright/test');


test.describe.parallel("demo test", () => {

    test("click on element default testcase", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        await page.locator('text=Add/Remove Elements').click();
        await page.pause()
    });

    test("simple click testcase 1", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        const addRemove = page.locator("text= Add/Remove Elements")
        await addRemove.click();
        const AddEle = page.locator("text=Add Element");
        await AddEle.click();
    });

    test.skip("another way to implimante click() testcase 2", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        const ele = page.locator("text=Add/Remove Elements");
        await ele.click();
    });

    test("another way to implimante click() testcase 3", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        const ele = page.locator("text=Add/Remove Elements");
        await ele.click();
    });

    test("another way to implimante click() testcase 4", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        const ele = page.locator("text=Add/Remove Elementss");
        await ele.click();
    });
});