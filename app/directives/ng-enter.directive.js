// @ngInject
function ngEnter() {
  return {
    restrict: 'A',
    link    : link
  }
  function link( $scope, element, attrs ) {

    element.on("keydown keypress", function( event ) {

      if( event.which === 13 ) {

        $scope.$eval(attrs.ngEnter);

        $scope.$digest();

        return false;

      }

    });
    event.preventDefault();
  }
}

export default ngEnter;