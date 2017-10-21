var webdriverio = require('webdriverio');
var assert = require('assert');
var options = {
    desiredCapabilities: {
        browserName: 'safari'
    }
};
webdriverio
    .remote(options)
    .init()
    .url('https://cucumber.io/docs/reference/javascript')
    .getTitle()
    .then(function (title) {
        console.log('Title of the page you have visited is: ' + title);
        assert.equal(title, "JavaScript·Cucumber");
    })
    .end();
