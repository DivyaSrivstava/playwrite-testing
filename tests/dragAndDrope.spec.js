const { test, expect } = require("@playwright/test");

test.describe("example of drang and drop", () => {
    test("drag& drop", async({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
        await page.dragAndDrop("id=column-a", "id=column-b")
        await page.pause();
    });
});