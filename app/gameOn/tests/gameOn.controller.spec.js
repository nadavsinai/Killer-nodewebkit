describe('gameOn Controller tests', function () {
    var controller, $modal, $controller, $templateCache;
    beforeEach(function () {
            debaser({autoScope: false})
                .module('killer')
                .object('$modal').withFunc('open').returns({
                    result: {
                        then:angular.noop
                    }
                })
                .object('$state')
                .object('killerSvc')
                .debase();
        }
    );

    beforeEach(angular.mock.inject(function (_$controller_, _$templateCache_,_$modal_) {
        $modal = _$modal_;
        $templateCache = _$templateCache_;
        $controller = _$controller_;
        controller = $controller('GameOnController', {$modal: $modal})
    }));

    it('checks scope assignments', function () {
        expect(controller.$state).toBeDefined();
        expect(controller.KillerService).toBeDefined();
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
            var DO = $modal.open.args[0][0]; //first call first arg
            var ctrlName = (DO.controller.split(' as ')[0]);
            var ctrl = $controller(ctrlName, {$modalInstance: {}, player: player});
            expect(ctrl).toBeDefined();
            var template = $templateCache.get(DO.templateUrl);
            expect(template).toBeDefined();
        });
    });
});