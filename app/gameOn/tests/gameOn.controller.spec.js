describe('gameOn Controller tests',function () {
    var controller,killerSvc = {},$state = {};
    beforeEach(angular.mock.module('killer'))
    beforeEach(angular.mock.inject(function ($controller,$rootScope) {
        controller = $controller('GameOnController',{$state:$state, KillerService:killerSvc})
    }));

    it('checks scope assignments', function () {
        expect(controller.$state).toEqual($state);
        expect(controller.KillerService).toEqual(killerSvc);

    });
});