// @ngInject
function ngFocusIf( $timeout ) {
  return {
    restrict: 'A',
    link    : link
  }
  function link( $scope, elem, attrs ) {
    if( $scope.$eval(attrs['ngFocusIf']) ) {
      $timeout(function() {
        elem.focus();
      }, 0);
    }
  }
}

module.exports = ngFocusIf;