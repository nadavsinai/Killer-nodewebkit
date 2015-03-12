import WinnerController from './winner.controller.js';

const Winner = angular.module('killer')

  .config(function( $stateProvider ) {

    $stateProvider
      .state('winner', {
        url        : '/winner',
        controller : 'WinnerController as wc',
        templateUrl: 'app/winner/views/winner.tpl.html'
      });
  })

  .controller('WinnerController', WinnerController);

export default Winner;


