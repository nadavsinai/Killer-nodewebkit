describe('gameOn Controller tests', function () {
    var controller, killerSvc = {}, $state = {}, result, $modal, DO = {}, $controller, $templateCache;
    beforeEach(function () {
        result = {
            result: {
                then: function () {
                }
            }
        };
        $modal = {
            open: function (doObj) {
                DO = doObj;
                return result;
            }
        };
        spyOn($modal, 'open').and.callThrough();
        spyOn(result.result, 'then');
    });
    beforeEach(angular.mock.module('killer'));
    beforeEach(angular.mock.inject(function (_$controller_, _$templateCache_) {
        $templateCache = _$templateCache_;
        $controller = _$controller_;
        controller = $controller('GameOnController', {$state: $state, KillerService: killerSvc, $modal: $modal})
    }));

    it('checks scope assignments', function () {
        expect(controller.$state).toEqual($state);
        expect(controller.KillerService).toEqual(killerSvc);
        expect(controller.$modal).toEqual($modal);
    });
    describe('showModal function', function () {
        it('should not open modal if player Killed', function () {
            var player = {killed: true};
            controller.showModal(player);
            expect($modal.open).not.toHaveBeenCalled();
        });
        it('should open modal if player not Killed, controller and template resolved', function () {
            var player = {killed: false};
            controller.showModal(player);
            expect($modal.open).toHaveBeenCalled();
            var ctrlName = (DO.controller.split(' as ')[0]);
            var ctrl = $controller(ctrlName, {$modalInstance: {}, player: player, KillerService: killerSvc});
            expect(ctrl).toBeDefined();
            var template = $templateCache.get(DO.templateUrl);
            expect(template).toBeDefined();
        });
    });

});