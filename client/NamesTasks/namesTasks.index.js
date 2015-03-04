import NamesTasksController from './namesTasks.controller.js';

const NamesTasks = angular.module('killer')

  .config(function( $stateProvider ) {

    $stateProvider
      .state('namesTasks', {
        abstract:true,
        url        : '/names-tasks',
        templateUrl: 'client/NamesTasks/views/index.tpl.html'
      })
      .state('namesTasks.readyMessage', {
        url        : '/readyMessage',
        templateUrl: 'client/NamesTasks/views/readyMessage.tpl.html'
      })
      .state('namesTasks.revealTasks', {
        url        : '/reveal-tasks',
        controller : 'NamesTasksController as nt',
        templateUrl: 'client/NamesTasks/views/revealTasks.tpl.html'
      })
  })

  .controller('NamesTasksController', NamesTasksController);

export default NamesTasks;


