describe('Register player tests', function () {

    var homeHelper = require('../../home/tests/home.helper');

    beforeEach(function () {
        browser.driver.get(browser.resetUrl);
    });

    it('tests 2 players are created', function () {
        homeHelper.setPlayers(2);
        expect(element.all(by.repeater('player in rp.KillerService.getPlayers()')).count()).toBe(2);
    });

    it('tests 6 players are created', function () {
        homeHelper.setPlayers(6);
        expect(element.all(by.repeater('player in rp.KillerService.getPlayers()')).count()).toBe(6);
    });

});