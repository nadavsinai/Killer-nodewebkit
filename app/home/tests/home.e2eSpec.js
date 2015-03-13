describe('home tests', function () {
    beforeEach(function () {
        browser.driver.get(browser.resetUrl);
    });
    it('tests entering players moves to registerPlayers', function () {
        element(by.model('home.numPlayers')).sendKeys(2,protractor.Key.ENTER);
        browser.sleep(500);
        expect(browser.getCurrentUrl()).toEqual(browser.resetUrl + '#/registerPlayers');
    });
});