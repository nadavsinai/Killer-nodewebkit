describe('home tests', function () {

    var home = require('./home.helper.js');

    beforeEach(function () {
        browser.driver.get(browser.resetUrl);
    });
    it('tests entering players moves to registerPlayers', function () {
        home.numPlayers.sendKeys(2, protractor.Key.ENTER);
        browser.sleep(500);
        expect(browser.getCurrentUrl()).toEqual(browser.resetUrl + '#/registerPlayers');
    });
});