import GameOnController from './gameOn.controller.js';
import KilledModalController from './killed.controller.js';

const GameOn = angular.module('killer')

  .config(function( $stateProvider ) {

    $stateProvider
      .state('gameOn', {
        url        : '/game-on',
        controller : 'GameOnController as go',
        templateUrl: 'app/gameOn/views/gameOn.tpl.html'
      })
  })

  .controller('GameOnController', GameOnController)
  .controller('KilledModalController', KilledModalController);

export default GameOn;


