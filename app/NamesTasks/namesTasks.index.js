import NamesTasksController from './namesTasks.controller.js';

const NamesTasks = angular.module('killer')

  .config(function( $stateProvider ) {

    $stateProvider
      .state('namesTasks', {
        abstract:true,
        url        : '/names-tasks',
        templateUrl: 'app/NamesTasks/views/index.tpl.html'
      })
      .state('namesTasks.readyMessage', {
        url        : '/readyMessage',
        templateUrl: 'app/NamesTasks/views/readyMessage.tpl.html'
      })
      .state('namesTasks.revealTasks', {
        url        : '/reveal-tasks',
        controller : 'NamesTasksController as nt',
        templateUrl: 'app/NamesTasks/views/revealTasks.tpl.html'
      })
  })

  .controller('NamesTasksController', NamesTasksController);

export default NamesTasks;


