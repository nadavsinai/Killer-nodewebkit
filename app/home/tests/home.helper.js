function Home() {
    var self = this;
    this.numPlayers = element(by.model('home.numPlayers'));
    this.setPlayers = function (num) {
        self.numPlayers.sendKeys(num, protractor.Key.ENTER);
        return browser.waitForUrlToChangeTo(/registerPlayers/);
    }
};


module.exports = new Home();