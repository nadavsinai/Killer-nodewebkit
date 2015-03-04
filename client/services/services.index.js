import KillerService from './killer.service.js';

const services = angular.module('killer.services', [])
  .service('KillerService', KillerService);

export default services;


