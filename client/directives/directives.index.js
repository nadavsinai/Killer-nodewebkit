import ngEnter from './ng-enter.directive.js';
import ngFocusIf from './ng-focus-if.directive.js';
import imgUpload from './img-upload.directive.js';

const directives = angular.module('killer.directives', [])

  .directive('ngEnter', ngEnter)

  .directive('imgUpload', imgUpload)

  .directive('ngFocusIf', ngFocusIf);