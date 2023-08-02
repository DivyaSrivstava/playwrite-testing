const { test, expect } = require("@playwright/test");

test.describe("example of checkebox", () => {

    test("checkbox", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        await page.locator("#content > ul > li:nth-child(6) > a").click();
        await page.locator("#checkboxes > input[type=checkbox]:nth-child(1)").first().check();
        await page.locator("#checkboxes > input[type=checkbox]:nth-child(3)").first().uncheck();
        await page.pause();

    });

});