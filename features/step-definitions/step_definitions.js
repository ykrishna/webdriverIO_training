var {defineSupportCode} = require('cucumber');
var assert = require('assert');

defineSupportCode(function ({Given, When, Then}) {
    Given('I am on the Cucumber.js GitHub repository', function () {
        return browser.url('https://github.com/cucumber/cucumber-js/tree/master');
    });

    Then('I closed the Join GitHub today Dialogue', function () {
        return browser.click("//button[@type='submit']");
    });

    When('I click on {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
        var locator = '//*[contains(text(),"' + stringInDoubleQuotes + '")]';
        browser.scroll('//*[@id="facebox"]');
        return browser.element(locator).click();
    });

    Then(/^I should see "([^"]*)"$/, function (text) {
        var locator = '//*[contains(text(),"' + text + '")]';
        var someText = browser.getText(locator);
        return assert.equal(someText, text);
    });
})
