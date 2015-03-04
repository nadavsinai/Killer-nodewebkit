import HomeController from './home.controller.js';

const Home = angular.module('killer')

  .config(function( $urlRouterProvider, $stateProvider ) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url        : '/',
        controller : 'HomeController as home',
        resolve    : {
          hasPlayers: ['KillerService', function( KillerService ) {
            if( KillerService.gameConfig.players.length ) {
              KillerService.newGame();
            }
          }]
        },
        templateUrl: 'client/home/views/home.tpl.html'
      });
  })

  .controller('HomeController', HomeController);

export default Home;


