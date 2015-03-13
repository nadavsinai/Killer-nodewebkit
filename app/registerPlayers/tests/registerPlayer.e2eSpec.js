xdescribe('Register player tests',function () {
    beforeEach(function (done) {
        browser.get('/registerPlayers').then(function(){
            done()
        });
    });
    it('tests something',function(){
       browser.pause();
    });
});