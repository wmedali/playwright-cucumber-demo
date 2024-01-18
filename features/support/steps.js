const { Given, When, Then } = require("@cucumber/cucumber");

Given("Bob opens Manabie website", { timeout: 60 * 1000 }, async function () {
    await this.openUrl('http://manabie.com/');
});

When("Bob goes to Careers section", async function () {
    await this.page.click('text=Info');
});

Then("Bob sees all job openings at Manabie", async function () {
    await this.page.waitForSelector('text=Our Reason for Being');
});