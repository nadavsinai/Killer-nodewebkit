import registerPlayersController from './registerPlayers.controller.js';

const RegisterPlayers = angular.module('killer')

  .config(function( $stateProvider ) {

    $stateProvider
      .state('registerPlayers', {
        url        : '/registerPlayers',
        controller : 'registerPlayersController as rp',
        templateUrl: 'app/registerPlayers/views/registerPlayers.tpl.html'
      });
  })

  .controller('registerPlayersController', registerPlayersController);

export default RegisterPlayers;


