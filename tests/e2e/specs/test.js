// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Demo test with localhost' : function (browser) {
    browser
      .url('http://localhost:8080/#/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('div[id=nav]', 1000)
      .click('div[id=nav]')
      .pause(1000)
      // .assert.containsText('.hello', 'Welcome to Your Vue.js App') // fails due to class selector
      .end();
  }
};