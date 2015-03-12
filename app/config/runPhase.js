(function() {
  'use strict'
  // @ngInject
  function runPhase( KillerService, $rootScope ) {

    KillerService.gameConfig = KillerService.getGameConfig() || {
      numPlayers: void 0,
      players   : []
    };

    $rootScope.$on('$stateChangeError', function( event, toState, toParams, fromState, fromParams, error ) {
      console.log(toState, error);
    });

  }

  module.exports = runPhase;

})();